import english from '@i18n/en.json';
import spanish from '@i18n/es.json';

const LANG = {
	ENGLISH: 'en',
	SPANISH: 'es',
};

export function getTranslations(lang: string) {
  return LANG[lang as keyof typeof LANG] || LANG['es'];
}

export const getI18N = ({
	currentLocale = 'es',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.ENGLISH) return {...spanish, ...english};
	return spanish;
};