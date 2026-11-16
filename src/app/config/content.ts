export interface SiteContent {
  header: {
    brand: string;
    cta: string;
    navLinks: { label: string; href: string }[];
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badge: string;
    highlights: string[];
  };
  sobre: {
    eyebrow: string;
    title: string;
    photoAlt: string;
    paragraphs: string[];
    philosophyTitle: string;
    philosophy: string;
    credentialsTitle: string;
    credentials: { value: string; label: string }[];
  };
  servicos: {
    eyebrow: string;
    title: string;
    text: string;
    readMore: string;
    cards: { icon: string; title: string; description: string; link: string }[];
    formatsTitle: string;
    formats: { icon: string; title: string; description: string }[];
    disclaimer: string;
  };
  trajetoria: {
    eyebrow: string;
    title: string;
    text: string;
    filterLabel: string;
    categories: { id: string; label: string }[];
    items: {
      category: string;
      period: string;
      title: string;
      place: string;
      description: string;
    }[];
  };
  metodologia: {
    eyebrow: string;
    title: string;
    text: string;
    steps: { step: string; title: string; description: string }[];
    valuesTitle: string;
    values: string[];
  };
  depoimentos: {
    eyebrow: string;
    title: string;
    text: string;
    prevLabel: string;
    nextLabel: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    moreText: string;
    readMore: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    text: string;
    items: { question: string; answer: string }[];
  };
  ctaFinal: {
    eyebrow: string;
    heading: string;
    description: string;
    button: string;
    secondary: string;
    note: string;
  };
  footer: {
    brandTitle: string;
    brandText: string;
    registry: string;
    quickLinksTitle: string;
    contactTitle: string;
    locationsTitle: string;
    locations: string[];
    notice: string;
    copyright: string;
  };
}

export const CONTENT: Record<string, SiteContent> = {
  pt: {
    header: {
      brand: 'Letícia Fregona',
      cta: 'Agende uma Consulta',
      navLinks: [
        { label: 'Início', href: '#top' },
        { label: 'Sobre', href: '#sobre' },
        { label: 'Serviços', href: '#servicos' },
        { label: 'Trajetória', href: '#trajetoria' },
        { label: 'Metodologia', href: '#metodologia' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contato', href: '#cta-final' },
      ],
    },
    hero: {
      eyebrow: 'CRN-3 86956',
      title: 'Nutrição clínica, metabolismo, emagrecimento e sintomas gastrointestinais',
      subtitle:
        'Minha missão é oferecer um atendimento individualizado com base em evidências, dentro da sua realidade.',
      ctaPrimary: 'Agende sua Consulta',
      ctaSecondary: 'Conheça a Letícia',
      badge: 'Presencial e online',
      highlights: [
        'Tratamento da Obesidade',
        'Sintomas Gastrointestinais',
        'Recomposição corporal',
        'Saúde da mulher',
        'Longevidade',
      ],
    },
    sobre: {
      eyebrow: 'Sobre a profissional',
      title: 'Conheça Letícia Fregona',
      photoAlt: 'Foto profissional da nutricionista Letícia Fregona',
      paragraphs: [
        'Sou nutricionista e minha atuação reúne duas frentes que caminham juntas: a prática clínica e a pesquisa científica.',
        'No consultório e em atendimento online, acompanho pacientes, com foco em obesidade, microbiota intestinal, composição corporal e uso de análogos de GLP-1. Como Antropometrista ISAK Nível 1, realizo uma avaliação física mais precisa e padronizada internacionalmente.',
      ],
      philosophyTitle: 'Minha abordagem',
      philosophy:
        'A nutrição em que acredito é a nutrição humana, que acolhe, escuta e une ciência e prática clínica. No atendimento individual, o objetivo é trazer mais qualidade de vida, saúde e autoestima.',
      credentialsTitle: 'Credenciais',
      credentials: [
        { value: 'CRN-3 86956', label: 'Registro profissional' },
        {
          value: 'Antropometrista · Protocolo ISAK',
          label: 'Certificação com reconhecimento internacional',
        },
        { value: 'MetaNutri · FMUSP', label: 'Pesquisadora no laboratório LIM35' },
        { value: 'Brasil e no mundo', label: 'Atendimento presencial e online' },
      ],
    },
    servicos: {
      eyebrow: 'Serviços',
      title: 'Como posso te ajudar',
      text: 'Atendimento nutricional individualizado, unindo escuta clínica e base científica atualizada.',
      readMore: 'Quero saber mais',
      cards: [
        {
          icon: '⚖️',
          title: 'Obesidade e emagrecimento',
          description:
            'Atendimento clínico com foco em obesidade e composição corporal, da avaliação física ao acompanhamento após a consulta.',
          link: '#cta-final',
        },
        {
          icon: '💊',
          title: 'Acompanhamento com análogos de GLP-1 e cirurgia bariátrica',
          description:
            'Cuidado nutricional durante o tratamento da obesidade, em diferentes abordagens: mudanças no estilo de vida, uso de medicações (como análogos de GLP-1) e intervenções cirúrgicas.',
          link: '#cta-final',
        },
        {
          icon: '💁🏻‍♀️',
          title: 'Saúde da mulher',
          description:
            'Orientação nutricional para mulheres em todas as fases da vida, da menarca à pós-menopausa, incluindo condições clínicas como SOMP, endometriose e fertilidade.',
          link: '#cta-final',
        },
        {
          icon: '📏',
          title: 'Composição corporal e recomposição',
          description:
            'Avaliação física e antropométrica padronizada (ISAK) para pessoas saudáveis que buscam recomposição corporal.',
          link: '#cta-final',
        },
        {
          icon: '🌿',
          title: 'Saúde intestinal e microbiota',
          description:
            'Atendimento voltado à saúde intestinal, manejo de sintomas gastrointestinais e prevenção de doenças.',
          link: '#cta-final',
        },
        {
          icon: '🏃',
          title: 'Nutrição esportiva e qualidade de vida',
          description:
            'Acompanhamento de quem pratica atividade física ou esporte, com foco em desempenho, longevidade e qualidade de vida.',
          link: '#cta-final',
        },
      ],
      formatsTitle: 'Formas de atendimento',
      formats: [
        {
          icon: '🏢',
          title: 'Presencial',
          description: 'No consultório, com avaliação física e antropométrica completa.',
        },
        {
          icon: '💻',
          title: 'Online',
          description: 'Para pacientes no Brasil e no exterior.',
        },
      ],
      disclaimer:
        'O acompanhamento nutricional é complementar ao cuidado médico. A prescrição e o ajuste de medicamentos são atribuições do médico.',
    },
    trajetoria: {
      eyebrow: 'Trajetória',
      title: 'Formação, pesquisa e atuação acadêmica',
      text: 'O que sustenta o atendimento: estudo contínuo, pesquisa ativa e troca com a comunidade científica.',
      filterLabel: 'Filtrar por categoria',
      categories: [
        { id: 'todos', label: 'Todos' },
        { id: 'pesquisa', label: 'Pesquisa' },
        { id: 'palestras', label: 'Palestras' },
        { id: 'formacao', label: 'Formação' },
        { id: 'eventos', label: 'Congressos' },
      ],
      items: [
        {
          category: 'pesquisa',
          period: 'Desde 06/2024',
          title: 'Pesquisadora no MetaNutri (LIM35)',
          place: 'Departamento de Gastroenterologia, FMUSP',
          description:
            'Coleta de dados, escrita científica, gestão de projetos e reuniões científicas semanais do grupo.',
        },
        // {
        //   category: 'pesquisa',
        //   period: 'Em andamento',
        //   title: 'Estágio probatório para ingresso no mestrado',
        //   place: 'FMUSP',
        //   description: 'Fase de coleta de dados em pesquisa envolvendo o uso de Tirzepatida.'
        // },
        {
          category: 'pesquisa',
          period: '2024',
          title: 'Artigo científico publicado',
          place: 'Revista Mundo da Saúde',
          description:
            'Estudo sobre fatores relacionados à Síndrome Metabólica em crianças e adolescentes.',
        },
        {
          category: 'eventos',
          period: '2023 e 2025',
          title: 'Apresentação de resultados em congressos',
          place:
            'CEuNMI (Porto, Portugal) e Congresso Brasileiro de Atualização em Endocrinologia e Metabologia (Gramado/RS)',
          description: 'Resultados prévios e finais da pesquisa de iniciação científica.',
        },
        {
          category: 'palestras',
          period: '27/08/2026',
          title: 'Cirurgia bariátrica e agonista de GLP-1: da teoria à prática clínica',
          place: 'FURB, Curso de Nutrição',
          description: 'Aula de 3 horas na disciplina Pesquisa em Nutrição I.',
        },
        {
          category: 'palestras',
          period: '08/2026',
          title: 'Cirurgia bariátrica e agonistas de GLP-1 na prática clínica',
          place: 'Faculdade de Saúde Pública da USP, liga acadêmica LANUC',
          description: 'Palestra para estudantes sobre o manejo nutricional nesses cenários.',
        },
        {
          category: 'formacao',
          period: '05/2025',
          title: 'Antropometrista ISAK Nível 1',
          place: 'Medsize / ISAK',
          description:
            'Formação teórica e prática em perímetros, dobras cutâneas e diâmetros ósseos, com avaliação de precisão pelo erro técnico de medida.',
        },
        {
          category: 'formacao',
          period: '2024 · em andamento',
          title: 'Pós-graduação em Metabolismo e Emagrecimento',
          place: 'Faculdade Uniguaçu',
          description: 'Formação complementar em andamento.',
        },
        {
          category: 'formacao',
          period: '2021 a 2024',
          title: 'Graduação em Nutrição',
          place: 'Centro Universitário São Camilo',
          description: 'Formação base em Nutrição.',
        },
        {
          category: 'formacao',
          period: '2023',
          title: 'Exames Bioquímicos na Prática do Nutricionista',
          place: 'Curso de extensão',
          description:
            'Solicitação, interpretação e correlação clínica de exames em saúde da mulher, nutrição esportiva e pacientes hospitalizados.',
        },
        {
          category: 'eventos',
          period: '2022 a 2026',
          title: 'Participação em congressos científicos',
          place: 'GANEPÃO, Ganep Update, COBRAN, CEuNMI e Congresso de Nutrição Esportiva',
          description: 'Atualização contínua em obesidade, nutrição clínica e nutrição esportiva.',
        },
        {
          category: 'formacao',
          period: '2026',
          title: 'Imersão em Doenças inflamatórias intestinais',
          place: 'Ganep Educação',
          description: '',
        },
      ],
    },
    metodologia: {
      eyebrow: 'Metodologia',
      title: 'Como funciona o atendimento',
      text: 'Um processo claro, individualizado e baseado em evidência, do primeiro contato ao acompanhamento.',
      steps: [
        {
          step: '1',
          title: 'Avaliação completa',
          description:
            'Conversa detalhada sobre seu histórico, rotina e objetivos, com análise de exames e avaliação física e antropométrica padronizada (ISAK) no atendimento presencial.',
        },
        {
          step: '2',
          title: 'Plano individualizado',
          description:
            'Planejamento alimentar construído para o seu perfil, a sua rotina e as suas preferências.',
        },
        {
          step: '3',
          title: 'Acompanhamento',
          description:
            'Retornos para ajustar o plano de acordo com a sua evolução e as suas necessidades.',
        },
        {
          step: '4',
          title: 'Autonomia e continuidade',
          description:
            'Consolidação de hábitos para que você siga cuidando da saúde com mais segurança nas suas escolhas.',
        },
      ],
      valuesTitle: 'Princípios do atendimento',
      values: [
        'Escuta e acolhimento',
        'Base científica',
        'Individualização',
        'Ética e transparência',
      ],
    },
    depoimentos: {
      eyebrow: 'Depoimentos',
      title: 'Resultados que inspiram',
      text: 'Depoimentos reais de pacientes que vivenciaram transformação física e emocional.',
      prevLabel: 'Depoimento anterior',
      nextLabel: 'Próximo depoimento',
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Conteúdo e conhecimento',
      moreText: 'Ver todos os artigos',
      readMore: 'Ler mais',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Perguntas frequentes',
      text: 'Respostas para as dúvidas mais comuns sobre o atendimento nutricional.',
      items: [
        {
          question: 'Como funciona a primeira consulta?',
          answer:
            'Começamos com uma avaliação completa do seu histórico, hábitos e objetivos. No atendimento presencial, ela inclui também a avaliação física e antropométrica. A partir daí, construímos um plano individualizado, que pode envolver a solicitação de exames bioquímicos (quando necessários), a prescrição de suplementos, o desenvolvimento de materiais educativos e todos os demais documentos necessários para conquistar os objetivos do tratamento e do acompanhamento.',
        },
        {
          question: 'Você atende online?',
          answer:
            'Sim. O atendimento online é feito para pacientes no Brasil e no exterior.',
        },
        {
          question: 'Você acompanha pacientes que usam medicamentos como os análogos de GLP-1?',
          answer:
            'Sim. O acompanhamento nutricional é um dos pilares do cuidado nesses casos, para manejo de sintomas, otimização de resultados, acompanhamento da composição corporal e resultados duradouros.',
        },
        {
          question: 'Você atende pacientes bariátricos?',
          answer:
            'Sim. O acompanhamento nutricional antes e depois da cirurgia bariátrica é fundamental para resultados duradouros, o manejo dos sintomas, a prevenção da Síndrome de Dumping e o controle das deficiências nutricionais.',
        },
        {
          question: 'Como é realizada a avaliação da composição corporal?',
          answer:
            'A adipometria é a técnica utilizada para a avaliação física, por meio das dobras cutâneas. Já o protocolo ISAK é um padrão internacional de medidas corporais, que garante maior precisão e comparabilidade na avaliação da composição corporal. Outros parâmetros também podem ser avaliados — mande uma mensagem no WhatsApp para saber mais.',
        },
        {
          question: 'Como faço para agendar?',
          answer:
            'Pelo botão de WhatsApp desta página. Na mesma conversa, você pode tirar dúvidas sobre valores e formas de pagamento.',
        },
      ],
    },
    ctaFinal: {
      eyebrow: 'Contato',
      heading: 'Vamos conversar sobre o seu cuidado?',
      description: '',
      button: 'Falar pelo WhatsApp',
      secondary: 'Enviar e-mail',
      note: 'Atendimento presencial e online',
    },
    footer: {
      brandTitle: 'Letícia Fregona',
      brandText: 'Nutrição humana, que acolhe, escuta e une ciência e prática clínica.',
      registry: 'Nutricionista · CRN-3 86956',
      quickLinksTitle: 'Links rápidos',
      contactTitle: 'Contato',
      locationsTitle: 'Atendimento presencial',
      locations: [
        'Rua Alexandre Dumas, 1268 - Santo Amaro, Chácara Santo Antônio, São Paulo - SP, 04735-003',
        'Rua Loefgren, 1304 - Santa Cruz, São Paulo - SP, 04849-329',
      ],
      notice:
        'O conteúdo deste site é informativo e não substitui a consulta individual. A prescrição e o ajuste de medicamentos são atribuições médicas.',
      copyright: '© 2026 Letícia Fregona · CRN-3 86956. Todos os direitos reservados.',
    },
  },
  en: {
    header: {
      brand: 'Letícia Fregona',
      cta: 'Book a Consultation',
      navLinks: [
        { label: 'Home', href: '#top' },
        { label: 'About', href: '#sobre' },
        { label: 'Services', href: '#servicos' },
        { label: 'Background', href: '#trajetoria' },
        { label: 'Methodology', href: '#metodologia' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Contact', href: '#cta-final' },
      ],
    },
    hero: {
      eyebrow: 'CRN-3 86956',
      title: 'Clinical nutrition, metabolism, weight loss and gastrointestinal symptoms',
      subtitle:
        'My mission is to provide individualized, evidence-based care that fits your personal reality.',
      ctaPrimary: 'Book Your Consultation',
      ctaSecondary: 'Meet Letícia',
      badge: 'In person and online',
      highlights: [
        'Obesity Treatment',
        'Gastrointestinal Symptoms',
        'Body Recomposition',
        "Women's Health",
        'Longevity',
      ],
    },
    sobre: {
      eyebrow: 'About the professional',
      title: 'Meet Letícia Fregona',
      photoAlt: 'Professional photo of nutritionist Letícia Fregona',
      paragraphs: [
        'I am a nutritionist, and my work brings together two fronts that go hand in hand: clinical practice and scientific research.',
        'In my office and through online care, I support patients, focusing on obesity, gut microbiota, body composition and the use of GLP-1 analogs. As an ISAK Level 1 Anthropometrist, I carry out physical assessments that are more precise and internationally standardized.',
      ],
      philosophyTitle: 'My approach',
      philosophy:
        'The nutrition I believe in is human nutrition: it welcomes, listens, and brings science and clinical practice together. In individual care, the goal is to bring more quality of life, health and self-esteem.',
      credentialsTitle: 'Credentials',
      credentials: [
        { value: 'CRN-3 86956', label: 'Professional registration' },
        {
          value: 'ISAK-certified Anthropometrist',
          label: 'Internationally recognized certification',
        },
        { value: 'MetaNutri · FMUSP', label: 'Researcher in the LIM35 group' },
        { value: 'Brazil and around the world', label: 'In-person and online care' },
      ],
    },
    servicos: {
      eyebrow: 'Services',
      title: 'How I can help you',
      text: 'Individualized nutritional care that combines clinical listening and up-to-date scientific evidence.',
      readMore: 'I want to know more',
      cards: [
        {
          icon: '⚖️',
          title: 'Obesity and weight management',
          description:
            'Clinical care focused on obesity and body composition, from the physical assessment to follow-up after the appointment.',
          link: '#cta-final',
        },
        {
          icon: '💊',
          title: 'Support with GLP-1 analogs and bariatric surgery',
          description:
            'Nutritional care during obesity treatment, across various approaches: lifestyle changes, the use of medications (such as GLP-1 analogues), and surgical interventions.',
          link: '#cta-final',
        },
        {
          icon: '💁🏻‍♀️',
          title: "Women's health",
          description:
            'Nutritional guidance for women at every stage of life, from menarche to post-menopause, including clinical conditions such as PMOS, endometriosis and fertility.',
          link: '#cta-final',
        },
        {
          icon: '📏',
          title: 'Body composition and recomposition',
          description:
            'Standardized physical and anthropometric assessment (ISAK) for healthy people seeking body recomposition.',
          link: '#cta-final',
        },
        {
          icon: '🌿',
          title: 'Gut health and microbiota',
          description:
            'Care focused on gut health, management of gastrointestinal symptoms, and disease prevention.',
          link: '#cta-final',
        },
        {
          icon: '🏃',
          title: 'Sports nutrition and quality of life',
          description:
            'Support for people who exercise or play sports, focused on performance, longevity and quality of life.',
          link: '#cta-final',
        },
      ],
      formatsTitle: 'Care formats',
      formats: [
        {
          icon: '🏢',
          title: 'In person',
          description: 'At the office, with a complete physical and anthropometric assessment.',
        },
        {
          icon: '💻',
          title: 'Online',
          description: 'For patients in Brazil and abroad.',
        },
      ],
      disclaimer:
        'Nutritional care complements medical care. Prescribing and adjusting medication is the responsibility of the physician.',
    },
    trajetoria: {
      eyebrow: 'Background',
      title: 'Education, research and academic work',
      text: 'What supports the care: continuous study, active research and exchange with the scientific community.',
      filterLabel: 'Filter by category',
      categories: [
        { id: 'todos', label: 'All' },
        { id: 'pesquisa', label: 'Research' },
        { id: 'palestras', label: 'Lectures' },
        { id: 'formacao', label: 'Education' },
        { id: 'eventos', label: 'Conferences' },
      ],
      items: [
        {
          category: 'pesquisa',
          period: 'Since 06/2024',
          title: 'Researcher at MetaNutri (LIM35)',
          place: 'Department of Gastroenterology, FMUSP',
          description:
            'Data collection, scientific writing, project management and weekly scientific meetings of the group.',
        },
        // {
        //   category: 'pesquisa',
        //   period: 'In progress',
        //   title: 'Probationary internship toward a master\u2019s degree',
        //   place: 'FMUSP',
        //   description: 'Data collection phase of a study involving the use of Tirzepatide.',
        // },
        {
          category: 'pesquisa',
          period: '2024',
          title: 'Published scientific article',
          place: 'Mundo da Saúde journal',
          description:
            'Study on factors related to Metabolic Syndrome in children and adolescents.',
        },
        {
          category: 'eventos',
          period: '2023 and 2025',
          title: 'Results presented at conferences',
          place:
            'CEuNMI (Porto, Portugal) and Brazilian Congress on Endocrinology and Metabolism Update (Gramado/RS)',
          description: 'Preliminary and final results of the undergraduate research project.',
        },
        {
          category: 'palestras',
          period: '08/27/2026',
          title: 'Bariatric surgery and GLP-1 agonists: from theory to clinical practice',
          place: 'FURB, Nutrition Program',
          description: '3-hour class in the Nutrition Research I course.',
        },
        {
          category: 'palestras',
          period: '08/2026',
          title: 'Bariatric surgery and GLP-1 agonists in clinical practice',
          place: 'School of Public Health at USP, academic league LANUC',
          description: 'Lecture for students on nutritional management in these scenarios.',
        },
        {
          category: 'formacao',
          period: '05/2025',
          title: 'ISAK Level 1 Anthropometrist',
          place: 'Medsize / ISAK',
          description:
            'Theoretical and practical training in girths, skinfolds and bone breadths, with precision assessed by technical error of measurement.',
        },
        {
          category: 'formacao',
          period: '2024 · in progress',
          title: 'Postgraduate program in Metabolism and Weight Loss',
          place: 'Faculdade Uniguaçu',
          description: 'Complementary training in progress.',
        },
        {
          category: 'formacao',
          period: '2021 to 2024',
          title: 'Bachelor\u2019s degree in Nutrition',
          place: 'Centro Universitário São Camilo',
          description: 'Core training in Nutrition.',
        },
        {
          category: 'formacao',
          period: '2023',
          title: 'Biochemical Tests in the Nutritionist\u2019s Practice',
          place: 'Extension course',
          description:
            'Requesting, interpreting and clinically correlating lab tests in women\u2019s health, sports nutrition and hospitalized patients.',
        },
        {
          category: 'eventos',
          period: '2022 to 2026',
          title: 'Attendance at scientific conferences',
          place: 'GANEPÃO, Ganep Update, COBRAN, CEuNMI and Sports Nutrition Congress',
          description: 'Continuous updating in obesity, clinical nutrition and sports nutrition.',
        },
        {
          category: 'formacao',
          period: '2026',
          title: 'Immersive course on Inflammatory Bowel Diseases',
          place: 'Ganep Educação',
          description: '',
        },
      ],
    },
    metodologia: {
      eyebrow: 'Methodology',
      title: 'How the care works',
      text: 'A clear, individualized and evidence-based process, from the first contact to follow-up.',
      steps: [
        {
          step: '1',
          title: 'Complete assessment',
          description:
            'A detailed conversation about your history, routine and goals, with analysis of lab tests and a standardized physical and anthropometric assessment (ISAK) in in-person care.',
        },
        {
          step: '2',
          title: 'Individualized plan',
          description: 'A meal plan built around your profile, your routine and your preferences.',
        },
        {
          step: '3',
          title: 'Follow-up',
          description:
            'Follow-up appointments to adjust the plan according to your progress and needs.',
        },
        {
          step: '4',
          title: 'Autonomy and continuity',
          description:
            'Consolidating habits so you can keep caring for your health with more confidence in your choices.',
        },
      ],
      valuesTitle: 'Care principles',
      values: [
        'Listening and warmth',
        'Scientific basis',
        'Individualization',
        'Ethics and transparency',
      ],
    },
    depoimentos: {
      eyebrow: 'Testimonials',
      title: 'Results that inspire',
      text: 'Real testimonials from patients who have experienced physical and emotional transformation.',
      prevLabel: 'Previous testimonial',
      nextLabel: 'Next testimonial',
    },
    blog: {
      eyebrow: 'Blog',
      title: 'Content and knowledge',
      moreText: 'View all articles',
      readMore: 'Read more',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      text: 'Answers to the most common questions about nutritional care.',
      items: [
        {
          question: 'How does the first appointment work?',
          answer:
            'We begin with a comprehensive assessment of your history, habits, and goals. For in-person appointments, it also includes a physical and anthropometric assessment. From there, we build an individualized plan, which may involve ordering biochemical tests (when needed), prescribing supplements, developing educational materials, and any other documents needed to achieve your goals throughout treatment and follow-up.',
        },
        {
          question: 'Do you offer online appointments?',
          answer:
            'Yes. Online care is available for patients in Brazil and abroad.',
        },
        {
          question: 'Do you support patients who use medications such as GLP-1 analogs?',
          answer:
            'Yes. Nutritional guidance is one of the pillars of care in these cases, serving to manage symptoms, optimize outcomes, monitor body composition, and ensure long-lasting results.',
        },
        {
          question: 'Do you see bariatric patients?',
          answer:
            'Yes. Nutritional support before and after bariatric surgery is essential for lasting results, symptom management, prevention of Dumping Syndrome, and control of nutritional deficiencies.',
        },
        {
          question: 'How is body composition assessment performed?',
          answer:
            'Adipometry is the technique used for the physical assessment, through skinfold measurements. The ISAK protocol is an international standard for body measurements, ensuring greater precision and comparability in body composition assessment. Other parameters can also be evaluated — send me a message on WhatsApp to learn more.',
        },
        {
          question: 'How do I book an appointment?',
          answer:
            'Through the WhatsApp button on this page. In the same conversation, you can ask about fees and payment methods.',
        },
      ],
    },
    ctaFinal: {
      eyebrow: 'Contact',
      heading: 'Shall we talk about your care?',
      description: '',
      button: 'Message on WhatsApp',
      secondary: 'Send an email',
      note: 'In-person and online care',
    },
    footer: {
      brandTitle: 'Letícia Fregona',
      brandText:
        'Human nutrition that welcomes, listens, and brings science and clinical practice together.',
      registry: 'Nutritionist · CRN-3 86956',
      quickLinksTitle: 'Quick links',
      contactTitle: 'Contact',
      locationsTitle: 'In-person care',
      locations: [
        'Rua Alexandre Dumas, 1268 - Santo Amaro, Chácara Santo Antônio, São Paulo - SP, 04735-003',
        'Rua Loefgren, 1304 - Santa Cruz, São Paulo - SP, 04849-329',
      ],
      notice:
        'The content of this website is informational and does not replace an individual consultation. Prescribing and adjusting medication are medical responsibilities.',
      copyright: '© 2026 Letícia Fregona · CRN-3 86956. All rights reserved.',
    },
  },
};
