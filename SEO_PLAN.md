# План задач по SEO и аналитике для forta-website

## 1. Вставка Google Tag (gtag.js) в код сайта

### Задачи:
- [ ] Создать компонент GoogleAnalytics для Next.js 15 с useRouter (Client Component)
- [ ] Добавить Measurement ID G-0FGC0MTQG7 (захардкожено)
- [ ] Добавить компонент в `src/app/layout.tsx`

**Файлы для создания/изменения:**
- `src/components/ui/GoogleAnalytics.tsx` (новый)
- `src/app/layout.tsx` (изменить)

---

## 2. Создание XML-карт (sitemap.xml, image-sitemap.xml, product-sitemap.xml)

### Задачи:
- [ ] Создать API route для динамической генерации `sitemap.xml`
- [ ] Создать API route для `image-sitemap.xml`
- [ ] Создать API route для `product-sitemap.xml`
- [ ] Добавить ссылки на карты в `robots.txt`

**Страницы для включения в sitemap:**
- `/` (главная)
- `/about`
- `/contact`
- `/products`
- `/products/garage-doors` (+ 7 подстраниц)
- `/products/doors` (+ 4 подстраницы)
- `/products/storage-systems` (+ 3 подстраницы)

**Файлы для создания/изменения:**
- `src/app/sitemap.xml/route.ts` (новый)
- `src/app/image-sitemap.xml/route.ts` (новый)
- `src/app/product-sitemap.xml/route.ts` (новый)
- `public/robots.txt` (изменить)

---

## 3. Добавление Open Graph + Twitter Cards

### Задачи:
- [ ] Расширить metadata в `src/app/layout.tsx` с полными Open Graph тегами
- [ ] Добавить Twitter Card теги (summary_large_image)
- [ ] Добавить мета-теги для каждой страницы продуктов

**Файлы для изменения:**
- `src/app/layout.tsx`
- `src/app/page.tsx`
- `src/app/about/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/products/garage-doors/page.tsx`
- `src/app/products/doors/page.tsx`
- `src/app/products/storage-systems/page.tsx`

**Мета-теги для добавления:**
```
og:title, og:description, og:image, og:url, og:type
og:site_name, og:locale, og:image:width, og:image:height
twitter:card, twitter:site, twitter:creator, twitter:title, twitter:description, twitter:image
```

---

## 4. Добавление разметки Schema.org для ИИ-ассистентов

### Задачи:
- [ ] Создать компонент для JSON-LD Schema.org AIAssistant
- [ ] Добавить компонент в layout или на страницу контактов
- [ ] Настроить базовую Organization схему

**Файлы для создания/изменения:**
- `src/components/seo/SchemaOrg.tsx` (новый)
- `src/app/layout.tsx` или `src/app/contact/page.tsx` (изменить)

**Структура JSON-LD:**
```json
{
  "@context": "https://schema.org",
  "@type": "AIAssistant",
  "name": "Forta AI Assistant",
  "description": "AI assistant for Hörmann product inquiries",
  "provider": {
    "@type": "Organization",
    "name": "Forta",
    "url": "https://forta-usa.com"
  },
  "areaServed": {
    "@type": "State",
    "name": "California"
  },
  "serviceType": "Product Information"
}
```

---

## 5. Добавление FAQ-разметки (FAQPage) на страницах

### Страницы для FAQ-разметки:
- `/products/garage-doors`
- `/products/doors`
- `/products/storage-systems`

### Задачи:
- [ ] Создать компонент FAQSchema для JSON-LD
- [ ] Добавить FAQ контент и разметку на страницу garage-doors
- [ ] Добавить FAQ контент и разметку на страницу doors
- [ ] Добавить FAQ контент и разметку на страницу storage-systems

**Файлы для создания/изменения:**
- `src/components/seo/FAQSchema.tsx` (новый)
- `src/app/products/garage-doors/page.tsx` (изменить)
- `src/app/products/doors/page.tsx` (изменить)
- `src/app/products/storage-systems/page.tsx` (изменить)

**Пример FAQ для garage-doors:**
- How long do Hörmann garage doors last?
- What warranty is included with garage doors?
- Are Hörmann garage doors energy efficient?
- What security features do Hörmann garage doors have?
- How do I maintain my garage door?

---

## Порядок выполнения

1. **Google Analytics** ✅ - базовая аналитика, приоритет высокий
2. **Sitemap** ✅ - SEO для индексации, приоритет высокий
3. **Open Graph + Twitter Cards** ✅ - соцсети и предпросмотр, приоритет средний
4. **Schema.org AI Assistant** ✅ - поисковая оптимизация, приоритет средний
5. **FAQ Markup** ✅ - расширенные сниппеты в поиске, приоритет средний

---

## Выполненные работы

### 1. Google Analytics
- ✅ Создан компонент `src/components/ui/GoogleAnalytics.tsx`
- ✅ Добавлен в `src/app/layout.tsx`
- ✅ Measurement ID: G-0FGC0MTQG7 (захардкожен)

### 2. XML-карты сайта
- ✅ `src/app/sitemap.xml/route.ts` - основная карта сайта
- ✅ `src/app/image-sitemap.xml/route.ts` - карта изображений
- ✅ `src/app/product-sitemap.xml/route.ts` - карта продуктов
- ✅ `public/robots.txt` - добавлены ссылки на карты

### 3. Open Graph + Twitter Cards
- ✅ Обновлена metadata в `src/app/layout.tsx`
- ✅ Добавлены Open Graph теги
- ✅ Добавлены Twitter Card теги

### 4. Schema.org
- ✅ Создан компонент `src/components/seo/SchemaOrg.tsx`
- ✅ Добавлена Organization схема в layout
- ✅ Доступна AIAssistant схема

### 5. FAQ-разметка
- ✅ Добавлена на страницу garage-doors с 6 вопросами
- ✅ Добавлена на страницу doors с 6 вопросами
- ✅ Добавлена на страницу storage-systems с 6 вопросами
