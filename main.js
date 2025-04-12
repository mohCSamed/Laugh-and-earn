// اضحك واكسب - الملف الرئيسي للجافاسكريبت

// تهيئة التطبيق
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // تهيئة المتغيرات
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  
  // تهيئة الوضع الليلي/النهاري
  if (isDarkMode) {
    document.documentElement.classList.add('dark');
  }
  
  // إنشاء العناصر الرئيسية للتطبيق
  createAppLayout();
  
  // تسجيل أحداث المستخدم
  registerEventListeners();
}

function createAppLayout() {
  const root = document.getElementById('root');
  
  // إنشاء الهيدر
  const header = document.createElement('header');
  header.className = 'app-header';
  header.innerHTML = `
    <div class="container">
      <div class="logo-container">
        <img src="logo.jpg" alt="اضحك واكسب" class="logo-image">
        <h1>اضحك واكسب</h1>
      </div>
      <div class="header-actions">
        <button id="darkModeToggle" class="icon-button">
          ${localStorage.getItem('darkMode') === 'true' ? '☀️' : '🌙'}
        </button>
        <button id="loginButton" class="primary-button">تسجيل الدخول</button>
      </div>
    </div>
  `;
  
  // إنشاء المحتوى الرئيسي
  const main = document.createElement('main');
  main.className = 'app-main';
  main.innerHTML = `
    <div class="container">
      <div class="welcome-section">
        <h2>مرحباً بك في منصة اضحك واكسب!</h2>
        <p>شارك نكتك، اضحك واكسب نقاط وجوائز حقيقية</p>
      </div>
      
      <div class="features-section">
        <div class="feature-card card">
          <h3>شارك نكتك</h3>
          <p>يمكنك مشاركة نكتة واحدة يومياً</p>
        </div>
        
        <div class="feature-card card">
          <h3>قيّم النكت</h3>
          <p>قم بتقييم نكت الآخرين والتفاعل معها</p>
        </div>
        
        <div class="feature-card card">
          <h3>اربح النقاط</h3>
          <p>احصل على نقاط عند حصول نكتك على إعجابات</p>
        </div>
        
        <div class="feature-card card">
          <h3>استبدل النقاط</h3>
          <p>استبدل نقاطك بجوائز حقيقية أسبوعياً</p>
        </div>
      </div>
      
      <div class="competition-section card">
        <h3>المسابقة الأسبوعية</h3>
        <p>شارك في المسابقة الأسبوعية للفوز بجوائز قيمة</p>
        <div class="prizes">
          <div class="prize">
            <span>المركز الأول</span>
            <strong>50 جنيه + 500 نقطة</strong>
          </div>
          <div class="prize">
            <span>المركز الثاني</span>
            <strong>50 جنيه + 350 نقطة</strong>
          </div>
          <div class="prize">
            <span>المركز الثالث</span>
            <strong>50 جنيه + 250 نقطة</strong>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // إنشاء الفوتر
  const footer = document.createElement('footer');
  footer.className = 'app-footer';
  footer.innerHTML = `
    <div class="container">
      <p>اضحك واكسب &copy; ${new Date().getFullYear()}</p>
      <p>الإصدار 1.0.0</p>
    </div>
  `;
  
  // إضافة العناصر إلى الصفحة
  root.appendChild(header);
  root.appendChild(main);
  root.appendChild(footer);
  
  // تطبيق الستايل الإضافي
  const style = document.createElement('style');
  style.textContent = `
    .app-header {
      padding: 1rem 0;
      background-color: var(--card);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .logo-container {
      display: flex;
      align-items: center;
    }
    
    .logo-image {
      width: 40px;
      height: 40px;
      margin-left: 10px;
    }
    
    .header-actions {
      display: flex;
      gap: 10px;
    }
    
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .primary-button {
      background-color: var(--primary);
      color: var(--primary-foreground);
      border-radius: var(--radius);
      padding: 0.5rem 1rem;
      border: none;
      cursor: pointer;
    }
    
    .icon-button {
      background: none;
      border: none;
      font-size: 1.2rem;
      cursor: pointer;
    }
    
    .app-main {
      padding: 2rem 0;
    }
    
    .app-main .container {
      flex-direction: column;
    }
    
    .welcome-section {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    .features-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
    
    .feature-card {
      text-align: center;
      padding: 1.5rem;
    }
    
    .competition-section {
      text-align: center;
      padding: 1.5rem;
    }
    
    .prizes {
      display: flex;
      justify-content: space-around;
      margin-top: 1rem;
    }
    
    .prize {
      display: flex;
      flex-direction: column;
    }
    
    .app-footer {
      background-color: var(--card);
      padding: 1rem 0;
      text-align: center;
      margin-top: 2rem;
    }
  `;
  document.head.appendChild(style);
}

function registerEventListeners() {
  // تبديل الوضع الليلي/النهاري
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', function() {
      const isDarkMode = document.documentElement.classList.contains('dark');
      if (isDarkMode) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
        darkModeToggle.textContent = '🌙';
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
        darkModeToggle.textContent = '☀️';
      }
    });
  }
  
  // تسجيل الدخول
  const loginButton = document.getElementById('loginButton');
  if (loginButton) {
    loginButton.addEventListener('click', function() {
      alert('صفحة تسجيل الدخول قيد الإنشاء');
    });
  }
}