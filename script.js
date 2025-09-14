// Data for projects with dual descriptions for dark and light modes
const projects = [
  {
    title: 'Real-time Data Pipeline',
    darkDesc: `- Technologies: PySpark, Delta Lake, Unity Catalog\n- Architecture: Medallion architecture\n- Built a scalable ETL pipeline processing streaming data with fault tolerance and schema enforcement.`,
    lightDesc: `Implemented a real-time data pipeline that improved data freshness by 50%, enabling faster business decisions and reducing operational costs.`
  },
  {
    title: 'AI-driven Forecasting Model',
    darkDesc: `- Tools: Python, TensorFlow, MLflow\n- Developed a forecasting model with 95% accuracy\n- Integrated model monitoring and retraining pipelines.`,
    lightDesc: `Delivered an AI forecasting solution that increased revenue by 15% through better demand prediction and inventory optimization.`
  },
  {
    title: 'Data Governance Framework',
    darkDesc: `- Implemented Unity Catalog for centralized data governance\n- Automated data lineage tracking and access controls\n- Ensured compliance with GDPR and HIPAA.`,
    lightDesc: `Established a data governance framework that reduced compliance risks and improved data accessibility for business teams.`
  }
];

// About Me content for both modes
const aboutContent = {
  dark: `Experienced Data Engineer and AI professional specializing in building robust data architectures and scalable machine learning pipelines. Skilled in PySpark, Delta Lake, and modern data governance techniques.`,
  light: `I help businesses unlock value from their data by delivering efficient data solutions and AI-driven insights that drive strategic growth and operational excellence.`
};

const aboutTextEl = document.getElementById('about-text');
const projectsGrid = document.getElementById('projects-grid');
const modeToggleBtn = document.getElementById('mode-toggle');
const body = document.body;

// Render content based on mode
function renderContent(isDark) {
  // About Me
  aboutTextEl.textContent = isDark ? aboutContent.dark : aboutContent.light;

  // Clear projects grid
  projectsGrid.innerHTML = '';

  // Create project cards
  projects.forEach(({ title, darkDesc, lightDesc }) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const p = document.createElement('p');
    p.textContent = isDark ? darkDesc : lightDesc;

    card.appendChild(h3);
    card.appendChild(p);
    projectsGrid.appendChild(card);
  });

  // Update toggle button icon and aria-label
  if (isDark) {
    modeToggleBtn.textContent = '☀️';
    modeToggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
  } else {
    modeToggleBtn.textContent = '🌙';
    modeToggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
  }
}

// Toggle mode handler
function toggleMode() {
  const isDark = body.classList.toggle('dark');
  renderContent(isDark);
  // Save preference
  localStorage.setItem('darkMode', isDark);
}

// Initialize mode based on saved preference or system preference
function initMode() {
  const savedMode = localStorage.getItem('darkMode');
  let isDark;

  if (savedMode !== null) {
    isDark = savedMode === 'true';
  } else {
    // Use system preference
    isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  if (isDark) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }

  renderContent(isDark);
}

// Event listeners
modeToggleBtn.addEventListener('click', toggleMode);

// Initialize on page load
initMode();
