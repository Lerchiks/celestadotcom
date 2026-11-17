import { TemplateMockData } from '@/entities/template/api/mock';
import type { Template } from '@/entities/template/model/types';

export async function getTemplates(): Promise<Template[]> {
    return TemplateMockData;
}
