---
---

{% raw %}
//window.lazySizesConfig = window.lazySizesConfig || {};
//window.lazySizesConfig.init = false;
{% endraw %}

{% assign lang = page.lang | default: site.lang | default: "en" %}
{% assign t = site.data.locales[lang] %}

{% include scripts/base64.js %}

{% include scripts/definition-lists.js %}
{% include scripts/filter.js %}
{% include scripts/cards.js %}

{% include scripts/common.js %}
{% include scripts/bootstrap.js %}

{% raw %}
//lazySizes.init();
{% endraw %}

{% include scripts/index.js %}

{% include scripts/sound-player.js %}
{% include scripts/cookieconsent.js %}
{% include scripts/browser-update.js %}
{% include scripts/google-analytics.js %}
