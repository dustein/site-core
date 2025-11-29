from PIL import Image, ExifTags
import glob
import os
import re

def get_next_number(directory='.'):
    """Encontra o próximo número sequencial disponível"""
    existing_files = glob.glob(os.path.join(directory, '[0-9][0-9][0-9].*'))
    
    if not existing_files:
        return 1
    
    numbers = []
    for filepath in existing_files:
        filename = os.path.basename(filepath)
        match = re.match(r'^(\d{3})\.', filename)
        if match:
            numbers.append(int(match.group(1)))
    
    return max(numbers) + 1 if numbers else 1

def fix_image_orientation(img):
    """Corrige a orientação da imagem baseado nos dados EXIF"""
    try:
        for orientation in ExifTags.TAGS.keys():
            if ExifTags.TAGS[orientation] == 'Orientation':
                break
        
        exif = img._getexif()
        if exif is not None:
            orientation_value = exif.get(orientation)
            
            if orientation_value == 3:
                img = img.rotate(180, expand=True)
            elif orientation_value == 6:
                img = img.rotate(270, expand=True)
            elif orientation_value == 8:
                img = img.rotate(90, expand=True)
    except (AttributeError, KeyError, IndexError):
        pass
    
    return img

def resize_image_proportional(image_path, max_size=800):
    """Redimensiona a imagem mantendo proporção e orientação"""
    img = Image.open(image_path)
    
    # Corrige orientação EXIF
    img = fix_image_orientation(img)
    
    width, height = img.size
    
    # Verifica se precisa redimensionar
    if width <= max_size and height <= max_size:
        return None, None, None
    
    # Calcula novas dimensões mantendo proporção
    if width > height:
        # Foto landscape (deitada) - reduz width para 800
        new_width = max_size
        new_height = int(height * (max_size / width))
    else:
        # Foto portrait (em pé) - reduz height para 800
        new_height = max_size
        new_width = int(width * (max_size / height))
    
    # Redimensiona mantendo qualidade
    resized_img = img.resize((new_width, new_height), Image.LANCZOS)
    
    return resized_img, new_width, new_height

def get_all_processed_images(directory='.'):
    """Coleta informações de todas as imagens já processadas"""
    processed_files = []
    
    image_files = sorted(glob.glob(os.path.join(directory, '[0-9][0-9][0-9].*')))
    
    for filepath in image_files:
        try:
            img = Image.open(filepath)
            img = fix_image_orientation(img)
            width, height = img.size
            filename = os.path.basename(filepath)
            number = filename.split('.')[0]
            
            processed_files.append({
                'src': f'/images/galeria/{filename}',
                'width': width,
                'height': height,
                'alt': f'foto {number}'
            })
            img.close()
        except Exception as e:
            print(f"Erro ao processar {filepath}: {e}")
    
    return processed_files

def generate_output_txt(processed_images, output_file='galeria_output.txt'):
    """Gera o arquivo txt com as informações das imagens"""
    entries = []
    
    for img_info in processed_images:
        entry = f'{{ src: "{img_info["src"]}", width: {img_info["width"]}, height: {img_info["height"]}, alt: "{img_info["alt"]}" }}'
        entries.append(entry)
    
    # Cada entrada em uma linha separada, com vírgula no final (exceto a última)
    content = ',\n'.join(entries)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\n📄 Arquivo {output_file} gerado com {len(processed_images)} imagens")

def main():
    image_extensions = ['*.jpg', '*.jpeg', '*.png', '*.gif', '*.bmp', '*.webp']
    
    image_files = []
    for ext in image_extensions:
        image_files.extend(glob.glob(ext))
        image_files.extend(glob.glob(ext.upper()))
    
    # Remove arquivos já numerados
    image_files = [f for f in image_files if not re.match(r'^\d{3}\.', os.path.basename(f))]
    
    if not image_files:
        print("Nenhuma imagem nova encontrada para processar")
    else:
        print(f"📸 Encontradas {len(image_files)} imagens para processar\n")
        
        next_num = get_next_number()
        
        for img_path in image_files:
            try:
                result = resize_image_proportional(img_path)
                
                if result[0] is None:
                    print(f"⏭️  {img_path} - já está no tamanho correto")
                    continue
                
                resized_img, new_width, new_height = result
                ext = os.path.splitext(img_path)[1]
                new_filename = f"{next_num:03d}{ext}"
                
                # Salva sem metadados EXIF para evitar rotações futuras
                resized_img.save(new_filename, quality=95, exif=b"")
                
                orientation = "portrait 📱" if new_height > new_width else "landscape 🖼️"
                print(f"✅ {img_path} → {new_filename} ({new_width}x{new_height}) {orientation}")
                
                next_num += 1
                resized_img.close()
                
            except Exception as e:
                print(f"❌ Erro ao processar {img_path}: {e}")
    
    # Gera o arquivo txt
    all_images = get_all_processed_images()
    if all_images:
        generate_output_txt(all_images)
    else:
        print("\nNenhuma imagem processada encontrada")

if __name__ == "__main__":
    main()
