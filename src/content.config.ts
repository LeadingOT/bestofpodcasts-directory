import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const listings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/listings' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    host: z.string(), // 主持人
    url: z.string().url(), // 主播客网站
    platforms: z.object({
      spotify: z.string().url().optional(),
      apple: z.string().url().optional(),
      google: z.string().url().optional(),
      youtube: z.string().url().optional(),
      website: z.string().url().optional(),
    }).optional(),
    logo: z.string().optional(),
    features: z.array(z.string()), // 节目特色
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    rating: z.number().min(0).max(5).optional(),
    episodeCount: z.number().optional(), // 总集数
    frequency: z.string().optional(), // 更新频率
    averageDuration: z.string().optional(), // 平均时长
    firstEpisode: z.string().optional(), // 首播日期
    lastUpdated: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { listings };
