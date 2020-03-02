import DocuImage from '../../../assets/svg/landing-docu-card.svg';
import PayImage from '../../../assets/svg/landing-stripe.svg';
import WorkImage from '../../../assets/svg/landing-workorder.svg';
import ChartImage from '../../../assets/svg/landing-chart.svg';

export default [
  {
    src: DocuImage,
    alt: 'Spotlight card with documents.',
    key: 'DOCUMENT_CARD',
    description:
      'Communicate and share documents with you tenants directly in the app.'
  },
  {
    src: PayImage,
    alt: 'Spotlight card highlghting Stripe.',
    key: 'PAY_CARD',
    description: 'Accept payments with confidence through Stripe’s secure API.'
  },
  {
    src: WorkImage,
    alt: 'Spotlight card highlighting work orders.',
    key: 'WORK_CARD',
    description:
      'Organize and review repair requests from creation to completion.'
  },
  {
    src: ChartImage,
    alt: 'Spotlight card highlighting statistics and charts.',
    key: 'CHART_CARD',
    description:
      'Keep track of your cash flow month-to-month so you know exactly where your finances are.'
  }
];
