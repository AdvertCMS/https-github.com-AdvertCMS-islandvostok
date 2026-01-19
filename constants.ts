
import { Tour } from './types';

export const LEGAL_SERVICES: any[] = [
  {
    id: 'auto-law',
    title: 'Авто Адвокат',
    subtitle: 'Вернем права или оспорим ДТП',
    description: 'Профессиональный возврат прав при лишении по любым статьям (12.8, 12.26 и др.). Анализируем ошибки инспекторов, которые не видит никто другой. Опыт более 25 лет.',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=1200',
    duration: 'Консультация 0 ₽',
    price: 'от 5 000 ₽',
    category: 'Land',
    features: ['Суды всех уровней', 'Гарантия по договору', 'Бесплатный разбор дела']
  },
  {
    id: 'maritime-law',
    title: 'Морское право',
    subtitle: 'Защита судовладельцев',
    description: 'Урегулирование аварий, задержаний и трудовых споров на море. Полное сопровождение сделок купли-продажи и регистрации судов.',
    image: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80&w=1200',
    duration: 'Любая сложность',
    price: 'Индивидуально',
    category: 'Sea',
    features: ['Международный арбитраж', 'Аварийный комиссар', 'Защита экипажа']
  },
  {
    id: 'customs-law',
    title: 'Таможенные споры',
    subtitle: 'ВЭД под ключ',
    description: 'Обжалование решений таможни, возврат КТС и разблокировка грузов. Минимизируем риски при импорте и экспорте через порты Дальнего Востока.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    duration: 'Оперативно',
    price: 'от 15 000 ₽',
    category: 'Island',
    features: ['Возврат переплат', 'Представительство в ФТС', 'Аудит рисков']
  },
  {
    id: 'tax-law',
    title: 'Налоговые дела',
    subtitle: 'Безопасность вашего бизнеса',
    description: 'Снижение налоговых доначислений и штрафов. Сопровождение проверок и защита активов от претензий контролирующих органов.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200',
    duration: 'Налоговый аудит',
    price: 'Проектный расчет',
    category: 'Land',
    features: ['Снижение штрафов', 'Налоговое планирование', 'Судебная защита']
  }
];

export const NAV_LINKS = [
  { label: 'О нас', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Контакты', href: '#contact' }
];