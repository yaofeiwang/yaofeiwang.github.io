/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the 
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is 
// actually present on the page.
import { plotlyDarkLayout, plotlyLightLayout } from './theme.js';
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") {
      plotlyElements.forEach((elem) => {
        // Parse the Plotly JSON data and hide it
        var jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   ========================================================================== */

$(document).ready(function () {
  // SCSS SETTINGS - These should be the same as the settings in the relevant files 
  const scssLarge = 925;          // pixels, from /_sass/_themes.scss
  const scssMastheadHeight = 70;  // pixels, from the current theme (e.g., /_sass/theme/_default.scss)

  // If the user hasn't chosen a theme, follow the OS preference
  setTheme();
  window.matchMedia('(prefers-color-scheme: dark)')


  // 注释掉导航菜单按钮的事件监听器，因为按钮已被注释掉
  /*
  // Enable the navigation menu toggle - using event delegation for better reliability
  $(document).on('click', '.greedy-nav button', function() {
    console.log('Navigation menu button clicked');
    $('.greedy-nav ul.hidden-links').toggleClass('hidden');
    $(this).toggleClass('open');
  });
  */

  // Enable the sticky footer
  var bumpIt = function () {
    $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
  }
  $(window).resize(function () {
    didResize = true;
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpIt();
    }}, 250);
  var didResize = false;
  bumpIt();

  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function () {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });

  // Init smooth scroll, this needs to be slightly more than then fixed masthead height
  $("a").smoothScroll({ offset: -scssMastheadHeight, preventDefault: false, });

  // 元素进入视口时的淡入效果
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // 观察所有的section元素
  document.querySelectorAll('#about-me, #publications, #educations, #professional-activities').forEach(section => {
    observer.observe(section);
  });

  // 防止点击导航链接后页面跳转
  document.querySelectorAll('#site-nav a[href^="/#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - scssMastheadHeight,
          behavior: 'smooth'
        });
        
        // 在移动设备上点击导航链接后关闭菜单
        if ($(window).width() < scssLarge) {
          $('.navicon').click();
        }
      }
    });
  });

  // BibTeX弹窗功能
  window.showBibtexModal = function(bibPath) {
    fetch(bibPath)
      .then(response => response.text())
      .then(text => {
        document.getElementById('bibtex-content').textContent = text;
        document.getElementById('bibtex-modal').style.display = 'block';
      })
      .catch(err => {
        console.error('获取BibTeX失败:', err);
        alert('无法加载BibTeX内容');
      });
  };

  window.copyBibtexFromModal = function() {
    const bibtex = document.getElementById('bibtex-content').textContent;
    navigator.clipboard.writeText(bibtex).then(() => {
      alert('BibTeX已复制到剪贴板！');
    }).catch(err => {
      console.error('复制BibTeX失败:', err);
      alert('复制失败，请手动复制。');
    });
  };

  // 复制BibTeX功能（旧版）
  document.querySelectorAll('.copy-bibtex-btn').forEach(button => {
    button.addEventListener('click', function() {
      const bibtexId = this.getAttribute('data-bibtex-id');
      const bibtexElement = document.getElementById(bibtexId);
      
      if (bibtexElement) {
        const bibtexText = bibtexElement.textContent;
        navigator.clipboard.writeText(bibtexText).then(() => {
          // 显示成功提示
          const successMessage = this.parentElement.querySelector('.copy-success');
          if (successMessage) {
            successMessage.style.display = 'inline';
            setTimeout(() => {
              successMessage.style.display = 'none';
            }, 2000);
          }
        }).catch(err => {
          console.error('复制失败:', err);
        });
      }
    });
  });

});
