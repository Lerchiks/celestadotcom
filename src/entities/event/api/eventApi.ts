import { TemplateMockData } from '@/entities/event/api/mock';
import type { TemplateEvent } from '@/entities/event/model/types';

//Тут пока мок дата

export async function getTemplateEvents(): Promise<TemplateEvent[]> {
    return TemplateMockData;
}

export async function getTemplateEventById(
    id: string,
): Promise<TemplateEvent | undefined> {
    return TemplateMockData.find((tpl) => tpl.id === id);
}
