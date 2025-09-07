---
permalink: /
# title: "Yaofei Wang (王垚飞)"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
layout: single-page
---

<div id="about-me">
  <h2 class="section-title">About Me</h2>
</div>

I received my B.S. degree in 2017 from Southwest Jiaotong University (SWJTU) and my Ph.D. degree in 2022 from the University of Science and Technology of China (USTC), under the supervision of Prof. <a href="https://faculty.ustc.edu.cn/yunenghai/zh_CN/index.htm">Nenghai Yu</a> and Prof. <a href="http://staff.ustc.edu.cn/~zhangwm/index.html">Weiming Zhang</a>.  
I am currently an Associate Professor at Hefei University of Technology (HFUT).  
My research interests include information hiding and AI security.

<div id="publications">
  <h2 class="section-title">Publications</h2>
</div>


[SparSamp: Efficient Provably Secure Steganography Based on Sparse Sampling](https://www.usenix.org/conference/usenixsecurity25/presentation/wang-yaofei). **34th USENIX Security Symposium (USENIX Security 25, CCF A)**, 2025 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/sparsamp.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
**Yaofei Wang**, Gang Pei, Kejiang Chen, Jinyang Ding, Chao Pan, Weilong Pang, Donghui Hu*, Weiming Zhang  

{% include bibtex_modal.html %}

<script>
// BibTeX Modal Functionality
function showBibtexModal(bibPath) {
  fetch(bibPath)
    .then(response => response.text())
    .then(text => {
      document.getElementById('bibtex-content').textContent = text;
      document.getElementById('bibtex-modal').style.display = 'block';
    })
    .catch(err => {
      console.error('Failed to load BibTeX:', err);
      alert('Unable to load BibTeX content');
    });
}

function copyBibtexFromModal() {
  const bibtex = document.getElementById('bibtex-content').textContent;
  navigator.clipboard.writeText(bibtex).then(() => {
    alert('BibTeX copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy BibTeX:', err);
    alert('Copy failed, please copy manually.');
  });
}

// 确保在DOM加载完成后初始化BibTeX功能
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    // BibTeX功能已在上方定义
  });
} else {  // DOM已经加载完成
  // 已经在_main.js中定义了showBibtexModal和copyBibtexFromModal函数
}
  </script>


[Rethinking Prefix-based Steganography for Enhanced Security and Efficiency](https://ieeexplore.ieee.org/document/10919130). **IEEE Transactions on Information Forensics and Security (TIFS, Q1, CCF A)**, 2025 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Pan2025Rethinking.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Chao Pan, Donghui Hu*, **Yaofei Wang\***, Kejiang Chen, Yinyin Peng, Xianjin Rong, Chen Gu, Meng Li

[LDStega: Practical and Robust Generative Image Steganography based on Latent Diffusion Models](https://dl.acm.org/doi/10.1145/3664647.3681635). **ACM Multimedia 2024 (CCF A)** <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Peng2024LDStega.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Yinin Peng, **Yaofei Wang\***, Donghui Hu*, Kejiang Chen, Xianjin Rong, Weiming Zhang

[SpotAttack: Covering Spots on Surface to Attack LiDAR Based Autonomous Driving Systems](https://ieeexplore.ieee.org/document/10663299). **IEEE Internet of Things Journal (IoTJ, Q1)**, 2024 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Huang2024SpotAttack.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Qiusheng Huang, Chen Gu*, **Yaofei Wang\***, and Donghui Hu

[StegaDDPM: Generative Image Steganography based on Denoising Diffusion Probabilistic Model](hhttps://dl.acm.org/doi/10.1145/3581783.3612514). **ACM Multimedia 2023 (CCF A)** <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Peng2023StegaDDPM.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Yinin Peng, Donghui Hu*, **Yaofei Wang\***, Kejiang Chen, Gang Pei, Weiming Zhang

[Non-Additive Cost Functions for JPEG Steganography Based on Block Boundary Maintenance](https://ieeexplore.ieee.org/document/9218950). **IEEE Transactions on Information Forensics and Security (TIFS, Q1, CCF A)**, 2021 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Wang2021NonAdditive.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
**Yaofei Wang**, Weiming Zhang, Weixiang Li, Nenghai Yu

[Non-Additive Cost Functions for Color Image Steganography Based on Inter-Channel Correlations and Differences](https://ieeexplore.ieee.org/document/8917610). **IEEE Transactions on Information Forensics and Security (TIFS, Q1, CCF A)**, 2020 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Wang2020NonAdditive.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
**Yaofei Wang**, Weiming Zhang, Weixiang Li, Xinzhi Yu, Nenghai Yu

[BBC++: Enhanced Block Boundary Continuity on Defining Non-Additive Distortion for JPEG Steganography](https://ieeexplore.ieee.org/document/9144531). **IEEE Transactions on Circuits and Systems for Video Technology (TCSVT, Q1, CCF B)**, 2020 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Wang2021BBC.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
**Yaofei Wang**, Weixiang Li, Weiming Zhang, Xinzhi Yu, Kunlin Liu, Nenghai Yu

[Discop: Provably Secure Steganography in Practice Based on “Distribution Copies”](https://ieeexplore.ieee.org/abstract/document/10179287). **2023 IEEE Symposium on Security and Privacy (S&P, CCF A)** <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Ding2023Discop.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Jinyang Ding, Kejiang Chen\*, **Yaofei Wang**, Na Zhao, Weiming Zhang\*, Nenghai Yu

[Image Steganography with Deep Orthogonal Fusion of Multi-Scale Channel Attention](https://ieeexplore.ieee.org/document/10446373). **IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP, CCF B)**, 2024 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Peng2024Orthogonal.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Yinin Peng, Donghui Hu*, G. Pei, **Yaofei Wang\***

[HiFi-GANw: Watermarked Speech Synthesis Via Fine-Tuning of HiFi-GAN](https://ieeexplore.ieee.org/document/10670282). **IEEE Signal Processing Letters (SPL, Q2)**, 2024 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Cheng2024HiFi.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Xiangyu Cheng, **Yaofei Wang\***, Chang Liu, Donghui Hu\*, Zhaopin Su

[图像非加性隐写综述](https://www.cjnis.com.cn/thesisDetails?columnId=59569460&Fpath=home&index=0&l=zh&lang=zh)。网络与信息安全学报，2021  
Survey on image non-additive steganography. Chinese Journal of Network and Information Security, 2021  
**王垚飞**，张卫明，陈可江*，周文柏，俞能海

[ICStega: Image Captioning-based Semantically Controllable Linguistic Steganography](https://ieeexplore.ieee.org/abstract/document/10095722). **IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP, CCF B)**, 2023 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Wang2023ICStega.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Xilong Wang, **Yaofei Wang\***, Kejiang Chen, Jinyang Ding, Weiming Zhang\*, Nenghai Yu

[An Effective Steganalysis for Robust Steganography with Repetitive JPEG Compression](https://ieeexplore.ieee.org/abstract/document/9747061). **IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP, CCF B)**, 2022 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Feng2022Steganalysis.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Jinliu Feng, **Yaofei Wang**, Kejiang Chen, Weiming Zhang, Nenghai Yu

[Cover Reproducible Steganography via Deep Generative Models](https://ieeexplore.ieee.org/abstract/document/9931443). **IEEE Transactions on Dependable and Secure Computing (TDSC, Q1, CCF A)**, 2022 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Chen2023Reproducible.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Kejiang Chen, Hang Zhou, **Yaofei Wang**, Menghan Li, Weiming Zhang, Nenghai Yu

[Upward Robust Steganography Based on Overflow Alleviation](https://ieeexplore.ieee.org/abstract/document/10093140). **IEEE Transactions on Multimedia (TMM, Q1, CCF A)**, 2023 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Zeng2024Upward.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Kai Zeng, Kejiang Chen, Weiming Zhang, **Yaofei Wang**

[Robust Steganography for High Quality Images](https://ieeexplore.ieee.org/abstract/document/10057024). **IEEE Transactions on Circuits and Systems for Video Technology (TCSVT, Q1, CCF B)**, 2023 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Zeng2023Robust.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Kai Zeng, Kejiang Chen, Weiming Zhang, **Yaofei Wang**, Nenghai Yu

[Robust audio copy-move forgery detection on short forged slices using sliding window](https://www.sciencedirect.com/science/article/pii/S2214212623000911). **Journal of Information Security and Applications (Q2)**, 2023 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Su2023Robust.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Zhaopin Su, Mengke Li, Guofu Zhang, Qinfang Wu, **Yaofei Wang**

[Robust adaptive steganography based on generalized dither modulation and expanded embedding domain](https://www.sciencedirect.com/science/article/pii/S0165168419303962). **Signal Processing (Q2)**, 2020 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Yu2020Robust.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Xinzhi Yu, Kejiang Chen, **Yaofei Wang**, Weixiang Li, Weiming Zhang, Nenghai Yu

[Improving Robust Adaptive Steganography via Minimizing Channel Errors](https://www.sciencedirect.com/science/article/pii/S0165168422000457). **Signal Processing (Q2)**, 2022 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Zeng2022Improving.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Kai Zeng, Kejiang Chen, Weiming Zhang, **Yaofei Wang**, Nenghai Yu

[JPEG Steganography with Estimated Side-information](https://ieeexplore.ieee.org/abstract/document/8746719). **IEEE Transactions on Circuits and Systems for Video Technology (TCSVT, Q1, CCF B)**, 2019  <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Li2020Side.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Weixiang Li, Kejiang Chen, Weiming Zhang, Hang Zhou, **Yaofei Wang**, Nenghai Yu

[Improving the Embedding Strategy for Batch Adaptive Steganography](https://link.springer.com/chapter/10.1007/978-3-030-11389-6_19). Digital Forensics and Watermarking (IWDW), 2019 <span style="margin-left: 10px;"><a href="javascript:void(0)" onclick="showBibtexModal('assets/bib/Yu2019Improving.bib')" style="text-decoration: none; color: #1a73e8; font-size: 0.9em; border-bottom: 1px dotted #1a73e8;">[BibTeX]</a></span>  
Xinzhi Yu, Kejiang Chen, Weiming Zhang, **Yaofei Wang**, Nenghai Yu


<!-- ## Professional Activities {#professional-activities} -->
<!-- <div style="font-size: 1.8rem; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid #333; color: #333;">Professional Activities</div> -->

<div id="professional-activities">
  <h2 class="section-title">Professional Activities</h2>
</div>

### Conference reviewer

AAAI Conference on Artificial Intelligence (AAAI)

ACM Conference on Multimedia (MM)

### Journal reviewer

IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)

IEEE Transactions on Dependable and Secure Computing (TDSC)

IEEE Transactions on Information Forensics and Security (TIFS)

IEEE Transactions on Multimedia (TMM)

IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)

IEEE Signal Processing Letters (SPL)

Information Sciences (INS)

Signal Processing (SIGPRO)

Journal of Visual Communication of Image Representation (JVCIR)

Cybersecurity

Digital Signal Processing



<!-- ## Educations {#educations} -->
<!-- <div style="font-size: 1.8rem; margin-bottom: 1.5rem; padding-bottom: 0.5rem; border-bottom: 2px solid #333; color: #333;">Educations</div> -->

<div id="educations">
  <h2 class="section-title">Educations</h2>
</div>

- 2017.09 - 2022.06, Ph.D., School of Cyber Science and Technology, University of Science and Technology of China (USTC)
- 2013.09 - 2017.06, Bachelor, School of Physical Science and Technology, Southwest Jiaotong University (SWJTU)



<!-- This is the front page of a website that is powered by the [Academic Pages template](https://github.com/academicpages/academicpages.github.io) and hosted on GitHub pages. [GitHub pages](https://pages.github.com) is a free service in which websites are built and hosted from code and data stored in a GitHub repository, automatically updating when a new commit is made to the repository. This template was forked from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/) created by Michael Rose, and then extended to support the kinds of content that academics have: publications, talks, teaching, a portfolio, blog posts, and a dynamically-generated CV. Incidentally, these same features make it a great template for anyone that needs to show off a professional template! -->

 <!-- You can fork [this template](https://github.com/academicpages/academicpages.github.io) right now, modify the configuration and Markdown files, add your own PDFs and other content, and have your own site for free, with no ads! -->

<!-- A data-driven personal website
======
Like many other Jekyll-based GitHub Pages templates, Academic Pages makes you separate the website's content from its form. The content & metadata of your website are in structured Markdown files, while various other files constitute the theme, specifying how to transform that content & metadata into HTML pages. You keep these various Markdown (.md), YAML (.yml), HTML, and CSS files in a public GitHub repository. Each time you commit and push an update to the repository, the [GitHub pages](https://pages.github.com/) service creates static HTML pages based on these files, which are hosted on GitHub's servers free of charge.

Many of the features of dynamic content management systems (like Wordpress) can be achieved in this fashion, using a fraction of the computational resources and with far less vulnerability to hacking and DDoSing. You can also modify the theme to your heart's content without touching the content of your site. If you get to a point where you've broken something in Jekyll/HTML/CSS beyond repair, your Markdown files describing your talks, publications, etc. are safe. You can rollback the changes or even delete the repository and start over - just be sure to save the Markdown files! You can also write scripts that process the structured data on the site, such as [this one](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb) that analyzes metadata in pages about talks to display [a map of every location you've given a talk](https://academicpages.github.io/talkmap.html).

For those users that need more advanced functionality, the template also supports the following popular tools:
- [MathJax](https://www.mathjax.org/) for mathematical equations
- [Mermaid](https://mermaid.js.org/) for diagraming
- [Plotly](https://plotly.com/javascript/) for plotting

Getting started
======
1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this template](https://github.com/academicpages/academicpages.github.io) by clicking the "Use this template" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section

Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one Markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a Markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each Markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual Markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the Markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and Markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a Markdown file for a talk
![Editing a Markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful. -->

<!-- <script>
function copyBibtex(button) {
  // 获取相邻的div元素中的BibTeX内容
  const bibtexDiv = button.nextElementSibling;
  const bibtex = bibtexDiv.getAttribute('data-bibtex');
  
  // 复制到剪贴板
  navigator.clipboard.writeText(bibtex).then(() => {
    // 显示临时提示
    const originalText = button.textContent;
    button.textContent = '已复制!';
    button.style.color = '#28a745';
    
    // 2秒后恢复原样
    setTimeout(() => {
      button.textContent = originalText;
      button.style.color = '#0366d6';
    }, 2000);
  }).catch(err => {
    console.error('复制失败:', err);
    // 复制失败时的提示
    button.textContent = '复制失败';
    button.style.color = '#dc3545';
    
    setTimeout(() => {
      button.textContent = 'cite';
      button.style.color = '#0366d6';
    }, 2000);
  });
}
</script> -->
