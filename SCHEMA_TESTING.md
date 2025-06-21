# Schema Markup Testing Guide

## 1. Google Rich Results Test
Visit: https://search.google.com/test/rich-results

**Steps:**
1. Enter your website URL (e.g., https://creadive.az)
2. Click "Test URL"
3. Check for:
   - ✅ Organization schema
   - ✅ Website schema
   - ✅ Service schemas
   - ✅ Product schemas
   - ✅ Article schemas (for blog posts)

## 2. Browser Developer Tools

### Chrome/Firefox:
1. Open your website
2. Right-click → "Inspect" or press F12
3. Go to "Elements" tab
4. Search for "application/ld+json" (Ctrl+F)
5. You should see multiple script tags with your schema data

### Visual Check:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Creadive Agency",
  ...
}
</script>
```

## 3. Schema.org Validator
Visit: https://validator.schema.org/

**Steps:**
1. Enter your website URL
2. Check for validation errors
3. Verify all schema types are detected

## 4. Test Specific Pages

### Homepage Test:
- Visit: https://creadive.az
- Should show: Organization + Website schemas

### Services Page Test:
- Visit: https://creadive.az/services
- Should show: 8 Service schemas + Organization + Website

### Products Page Test:
- Visit: https://creadive.az/products
- Should show: Product schema + Organization + Website

### Blog Post Test:
- Visit: https://creadive.az/blog/1
- Should show: Article schema + Organization + Website

## 5. What to Look For

### ✅ Success Indicators:
- No validation errors
- All schema types detected
- Rich snippets preview available
- Structured data properly formatted

### ❌ Common Issues:
- Missing required fields
- Invalid JSON syntax
- Duplicate schemas
- Incorrect data types

## 6. Quick Browser Test

**In Developer Tools Console:**
```javascript
// Check for schema scripts
document.querySelectorAll('script[type="application/ld+json"]').length

// View schema content
document.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
  console.log(JSON.parse(script.textContent));
});
```

## 7. Expected Results

You should see:
- **Organization Schema**: Company info, team, contact
- **Website Schema**: Site metadata, search
- **Service Schemas**: 8 individual services
- **Product Schema**: Creatrax application
- **Article Schemas**: Blog post metadata

## 8. Testing Checklist

- [ ] Homepage loads with schemas
- [ ] Services page shows service schemas
- [ ] Products page shows product schema
- [ ] Blog posts show article schemas
- [ ] No console errors
- [ ] Google Rich Results Test passes
- [ ] Schema.org validator passes 