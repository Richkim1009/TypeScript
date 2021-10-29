{
  type Language = 'Javacript' | 'TypeScript' | 'Python';
  interface GovernedLanguage {
    language: Language;
    organization: string;
  }

  function complain(language: GovernedLanguage) {}
  complain({language: 'TypeScript', organization: 'Microsoft'});
  const ts = {
    language: 'TypeScript' as const,
    organization: 'MicroSoft',
  };
  complain(ts);
}