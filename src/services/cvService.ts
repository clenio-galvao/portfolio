/**
 * Serviço para gerenciar download de CVs baseado no idioma selecionado
 */

export type Language = 'pt' | 'en' | 'es';

interface CvFile {
  language: Language;
  filename: string;
  displayName: string;
}

class CvService {
  private cvFiles: CvFile[] = [
    {
      language: 'pt',
      filename: 'resume-pt.pdf',
      displayName: 'Resumé Clênio Galvão'
    },
    {
      language: 'en',
      filename: 'resume-en.pdf',
      displayName: 'Resumé Clênio Galvão'
    },
    {
      language: 'es',
      filename: 'resume-es.pdf',
      displayName: 'Resumé Clênio Galvão'
    }
  ];

  /**
   * Obtém o arquivo de CV baseado no idioma selecionado
   */
  getCvFile(language: Language): CvFile | null {
    return this.cvFiles.find(cv => cv.language === language) || null;
  }

  /**
   * Faz o download do CV no idioma especificado
   */
  downloadCv(language: Language): void {
    const cvFile = this.getCvFile(language);
    
    if (!cvFile) {
      console.error(`Arquivo de CV não encontrado para o idioma: ${language}`);
      return;
    }

    // Cria um link temporário para download
    const link = document.createElement('a');
    link.href = `/cv/${cvFile.filename}`;
    link.download = cvFile.filename;
    link.target = '_blank';
    
    // Adiciona o link ao DOM temporariamente
    document.body.appendChild(link);
    link.click();
    
    // Remove o link do DOM
    document.body.removeChild(link);
  }

  /**
   * Verifica se o arquivo de CV existe para o idioma especificado
   */
  async checkCvExists(language: Language): Promise<boolean> {
    const cvFile = this.getCvFile(language);
    if (!cvFile) return false;

    try {
      const response = await fetch(`/cv/${cvFile.filename}`, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      console.error(`Erro ao verificar existência do CV para ${language}:`, error);
      return false;
    }
  }

  /**
   * Obtém todos os idiomas disponíveis para CV
   */
  getAvailableLanguages(): Language[] {
    return this.cvFiles.map(cv => cv.language);
  }

  /**
   * Obtém informações de todos os arquivos de CV
   */
  getAllCvFiles(): CvFile[] {
    return [...this.cvFiles];
  }
}

// Instância singleton do serviço
export const cvService = new CvService();
export default cvService;
