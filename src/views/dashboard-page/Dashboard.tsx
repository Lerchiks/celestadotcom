import { getTemplateEvents } from '@/entities/event';
import { getTemplates } from '@/entities/template';
import EventCarousel from '@/widgets/event-carousel';
import LaptopScrollMockup from '@/widgets/laptop-scrollmockup';
import TemplateCarousel from '@/widgets/template-carousel';
import style from './Dashboard.module.scss';

export default async function Dashboard() {
    const eventsTemplates = await getTemplateEvents();
    const templates = await getTemplates();
    return (
        <div className={style['container']}>
            <EventCarousel templates={eventsTemplates} />

            <LaptopScrollMockup />

            <TemplateCarousel templates={templates} />
        </div>
    );
}
