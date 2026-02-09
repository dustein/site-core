from PIL import Image, ExifTags
import glob
import os
import re

def get_next_number(directory='.'):
    """Encontra o próximo número sequencial disponível (ex: 001, 002...)"""
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
    """Corrige a orientação da imagem baseado nos dados EXIF (evita foto deitada)"""
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
    """Redimensiona mantendo proporção e retorna a nova imagem"""
    img = Image.open(image_path)
    img = fix_image_orientation(img)
    
    width, height = img.size
    
    # Se a imagem já for menor que o máximo, retornamos as dimensões atuais
    if width <= max_size and height <= max_size:
        return img, width, height
    
    if width > height:
        new_width = max_size
        new_height = int(height * (max_size / width))
    else:
        new_height = max_size
        new_width = int(width * (max_size / height))
    
    resized_img = img.resize((new_width, new_height), Image.LANCZOS)
    return resized_img, new_width, new_height

def get_all_processed_images(directory='.'):
    """Varre a pasta em busca dos arquivos numerados finais e extrai os dados"""
    processed_files = []
    # Busca arquivos no formato 001.jpg, 002.png, etc.
    image_files = sorted(glob.glob(os.path.join(directory, '[0-9][0-9][0-9].*')))
    
    for filepath in image_files:
        try:
            with Image.open(filepath) as img:
                width, height = img.size
                filename = os.path.basename(filepath)
                number = filename.split('.')[0]
                
                processed_files.append({
                    'src': f'/images/galeria/{filename}',
                    'width': width,
                    'height': height,
                    'alt': f'foto {number}'
                })
        except Exception as e:
            print(f"❌ Erro ao ler dados de {filepath}: {e}")
    
    return processed_files

def generate_output_txt(processed_images, output_file='galeria_output.txt'):
    """Gera o arquivo de texto formatado como um objeto JS/JSON"""
    entries = []
    for img_info in processed_images:
        entry = f'  {{ src: "{img_info["src"]}", width: {img_info["width"]}, height: {img_info["height"]}, alt: "{img_info["alt"]}" }}'
        entries.append(entry)
    
    content = ',\n'.join(entries)
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\n📄 Lista gerada em: {output_file} ({len(processed_images)} imagens)")

def main():
    # Extensões suportadas
    exts = ['*.jpg', '*.jpeg', '*.png', '*.gif', '*.bmp', '*.webp']
    
    # USO DE SET: Evita duplicados em sistemas Windows (case-insensitive)
    all_files = set()
    for e in exts:
        all_files.update(glob.glob(e))
        all_files.update(glob.glob(e.upper()))
    
    # Filtra para ignorar arquivos que já estão numerados (para não re-processar o que já está pronto)
    new_images = [f for f in list(all_files) if not re.match(r'^\d{3}\.', os.path.basename(f))]
    
    if not new_images:
        print("💡 Nenhuma imagem nova para processar. Gerando TXT com as existentes...")
    else:
        print(f"📸 Processando {len(new_images)} novas imagens...\n")
        next_num = get_next_number()
        
        for img_path in sorted(new_images):
            try:
                resized_img, w, h = resize_image_proportional(img_path)
                
                ext = os.path.splitext(img_path)[1].lower()
                new_filename = f"{next_num:03d}{ext}"
                
                # Salva sem EXIF para garantir que a rotação fixa não seja desfeita por leitores de imagem
                resized_img.save(new_filename, quality=95, exif=b"")
                
                tipo = "retrato 📱" if h > w else "paisagem 🖼️"
                print(f"✅ {img_path} -> {new_filename} ({w}x{h}) {tipo}")
                
                next_num += 1
                resized_img.close()
            except Exception as e:
                print(f"❌ Erro ao processar {img_path}: {e}")

    # Sempre gera o TXT baseado no que está na pasta agora
    all_processed = get_all_processed_images()
    if all_processed:
        generate_output_txt(all_processed)
    else:
        print("\n⚠ Nenhuma imagem numerada (001, 002...) encontrada para listar no TXT.")

if __name__ == "__main__":
    main()