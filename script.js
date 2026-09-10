/* ---------- FOTOS Y LOGO REALES (subidos por el cliente en fotos/) ---------- */
const LOGO_SRC = 'fotos/logo.jpg';
const HERO_SRC = 'fotos/hero.jpg';
const GAL_PATIO_SRC = 'fotos/patio.jpg';
const GAL_INTERIOR_SRC = 'fotos/interior.jpg';
const GAL_CAFE_SRC = 'fotos/cafe.jpg';
const GAL_CATERING_SRC = 'fotos/catering.jpg';
const GAL_EVENTOS_SRC = 'fotos/eventos.jpg';
const MENU_BRUNCH_SRC = 'fotos/menu-brunch.jpg';
const MENU_LATTE_SRC = 'fotos/menu-latte.jpg';
const MENU_SANDWICH_SRC = 'fotos/menu-sandwich.jpg';

document.getElementById('logoNav').src = LOGO_SRC;
document.getElementById('logoHero').src = LOGO_SRC;
document.getElementById('logoDivider').src = LOGO_SRC;
document.getElementById('logoFooter').src = LOGO_SRC;
document.getElementById('heroPhoto').src = HERO_SRC;
document.getElementById('galPatio').src = GAL_PATIO_SRC;
document.getElementById('galInterior').src = GAL_INTERIOR_SRC;
document.getElementById('galCafe').src = GAL_CAFE_SRC;
document.getElementById('galCatering').src = GAL_CATERING_SRC;
document.getElementById('galEventos').src = GAL_EVENTOS_SRC;
document.getElementById('cateringPhoto1').src = GAL_CATERING_SRC;
document.getElementById('cateringPhoto2').src = GAL_EVENTOS_SRC;
document.getElementById('cateringPhoto3').src = MENU_SANDWICH_SRC;

/* ============================================================
   NAVEGACIÓN SPA POR PESTAÑAS
   ============================================================ */
const panels = document.querySelectorAll('.tab-panel');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.15 });

function goToTab(tabId) {
  panels.forEach(p => p.classList.toggle('active', p.dataset.tabPanel === tabId));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.tab === tabId));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('main-nav').classList.remove('open');
  const activePanel = document.querySelector('.tab-panel.active');
  if (activePanel) activePanel.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

document.querySelectorAll('[data-tab]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    goToTab(el.dataset.tab);
  });
});

document.querySelectorAll('.tab-panel.active .reveal').forEach(el => revealObserver.observe(el));

document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('main-nav').classList.toggle('open');
});

/* ---------- DATOS DE LA CARTA (Menú Verano 2026, precios confirmados por el cliente) ---------- */
const MENU = {
  cafe: {
    label: 'Café y bebidas',
    groups: [
      { title: 'Café', items: [
        { n: 'Doppio', p: 2800 },
        { n: 'Americano', p: 3000, d: 'Versión helada $3.300' },
        { n: 'Filtrado V60', p: 3800, d: 'Versión helada $4.300' },
        { n: 'Espresso Orange', p: 4200 },
        { n: 'Cappuccino', p: 3200, d: 'Versión helada $3.700' },
        { n: 'Latte', p: 3300, img: MENU_LATTE_SRC },
        { n: 'Flat White', p: 3200 },
        { n: 'Me Gusta Latte', p: 3600, d: 'Versión helada $4.100' },
        { n: 'Me Gusta Grande', p: 4200 },
        { n: 'Mocaccino', p: 3700, d: 'Versión helada $4.200' },
        { n: 'Dirty Chai', p: 4200 },
        { n: 'Espresso Tonic', p: 4500 },
        { n: 'Café helado', p: 6500 },
        { n: 'Affogato', p: 4500 },
      ] },
      { title: 'Sin café', items: [
        { n: 'Chocolate caliente', p: 3500, d: 'Versión helada $4.000' },
        { n: 'Variedades de té', p: 3500 },
        { n: 'Chai Latte', p: 3800, d: 'Versión helada $4.300' },
        { n: 'Matcha Latte', p: 3900, d: 'Versión helada $4.400' },
        { n: 'Té helado de limón', p: 3900 },
        { n: 'Jugo natural', p: 3800 },
        { n: 'Limonada', p: 4200 },
        { n: 'Cerveza sin alcohol', p: 4000 },
        { n: 'Michelada', p: 4500 },
        { n: 'Bebida', p: 2200 },
        { n: 'Agua mineral', p: 2000 },
        { n: 'Milkshake', p: 5800 },
        { n: 'Copa de helado', p: 6500, d: '3 bochas de helado, salsa de chocolate y crema' },
      ] }
    ]
  },
  pasteleria: {
    label: 'Pastelería',
    groups: [{ title: 'Pastelería', items: [
      { n: 'Lemon pie', p: 3800 },
      { n: 'Kuchen de nuez', p: 3900 },
      { n: 'Torta del día', p: 4900 },
      { n: 'Cheesecake', p: 4300 },
      { n: 'Tostada francesa', p: 8500 },
      { n: 'Bowl de desayuno', p: 4200, d: 'Yogurt, fruta y granola' },
      { n: 'Torta helada', p: 4800, v: 1 },
      { n: 'Cookie grande', p: 2500, v: 1 },
      { n: 'Mini Snickers', p: 800, v: 1 },
      { n: 'Bowl de fruta', p: 3800, v: 1 },
      { n: 'Alfajor', p: 2500, v: 1 },
      { n: 'Churros con chocolate', p: 3800 },
      { n: 'Muffin', p: 1900, v: 1 },
      { n: 'Pie o tarta', p: 4600, v: 1 },
      { n: 'Cookie sin azúcar', p: 1500, v: 1 },
    ] }]
  },
  desayuno: {
    label: 'Desayunos',
    groups: [
      { title: 'A cualquier hora', items: [
        { n: 'Desayuno u once', p: 12800, d: 'Latte, americano o tetera + toast mix clásico + trozo de torta' },
        { n: 'Eggs Benedict', p: 9500 },
        { n: 'Omelette 3 ingredientes', p: 9800, d: 'Queso gouda, queso de cabra, tomate, champiñones, aceitunas, jamón' },
        { n: 'Toast mix clásico', p: 6200, d: 'Palta y 2 huevos' },
        { n: 'Toast de huevo', p: 4500, d: '2 huevos' },
        { n: 'Toast de palta', p: 5700, v: 1 },
        { n: 'Toast green mix', p: 6500, d: 'Palta y hummus', v: 1 },
      ] },
      { title: 'Menú desayuno (hasta 12:30)', items: [
        { n: 'Huevos + té o café', p: 5500, d: '2 huevos y pan' },
        { n: 'Extra jamón o queso', p: 1200 },
        { n: 'Cachito + té o café', p: 5500, d: 'Jamón y queso derretido' },
        { n: 'Toast de palta + té o café', p: 7800 },
        { n: 'Churros con chocolate + té o café', p: 5800 },
        { n: 'Consomé y tostadas', p: 3500 },
        { n: 'Completo o italiano + té o café', p: 6000 },
        { n: 'Completo o italiano vegano + té o café', p: 7200, v: 1 },
        { n: 'Bowl de desayuno + té o café', p: 6000 },
        { n: 'Lemon pie o kuchen + té o café', p: 5800 },
      ] }
    ]
  },
  ensaladas: {
    label: 'Ensaladas',
    groups: [{ title: 'Ensaladas', items: [
      { n: 'Ensalada César', p: 8800, d: 'Lechuga, pollo, aderezo de la casa, croutones y parmesano' },
      { n: 'Ensalada de camarón', p: 9200, d: 'Lechuga, quinoa, choclo, palta, cilantro' },
      { n: 'Ensalada Seitán', p: 8500, v: 1, d: 'Lechuga, seitán, berros, tomates cherry, choclo, aceitunas' },
      { n: 'Ensalada vegana especial', p: 8500, v: 1, d: 'Arroz, hummus, champiñones salteados, tomate, mix verde, semillas' },
      { n: 'Ensalada griega', p: 9200, d: 'Lechuga, tomates cherry, queso de cabra, aceitunas, pepino' },
      { n: 'Ensalada de salmón', p: 9200, d: 'Lechuga, rúcula, salmón ahumado, pepino, parmesano, alcaparras' },
      { n: 'Ensalada de pastrami', p: 9200, d: 'Mix verde, pastrami, palta, tomates cherry, pan tostado' },
    ] }]
  },
  comfort: {
    label: 'Comfort food',
    groups: [{ title: 'Comfort food', items: [
      { n: 'Sopa o crema de sopa', p: 4200 },
      { n: 'Quiche', p: 9300, d: 'Con sopa y ensalada' },
      { n: 'Carne mechada', p: 9800, d: 'Con fetuccini' },
      { n: 'Pollo a la plancha', p: 8800, d: 'Con arroz y ensalada' },
      { n: 'Lomo a la plancha', p: 11800, d: 'Con arroz y ensalada' },
      { n: 'Pastel de choclo', p: 9900 },
      { n: 'Pastel de choclo vegano', p: 9900, v: 1 },
      { n: 'Lasaña', p: 9800 },
      { n: 'Lasaña vegana', p: 9500, v: 1 },
      { n: 'Gnocchi', p: 9300, d: 'Con salsa boloñesa o bechamel (champiñones, nueces o jamón)' },
      { n: 'Gnocchi vegano', p: 9300, v: 1, d: 'Con salsa boloñesa o bechamel (champiñones o nueces)' },
      { n: 'Porotos granados chilenos', p: 6900, v: 1 },
      { n: 'Legumbres', p: 4500, v: 1 },
    ] }]
  },
  brunch: {
    label: 'Brunch',
    groups: [{ title: 'Brunch', items: [
      { n: 'Brunch Me Gusta', p: 15300, d: 'Huevos revueltos o pochados, palta, tomate, mix verde, hummus y pan de masa madre + latte, americano, jugo o tetera + 3 mini snickers + fruta', img: MENU_BRUNCH_SRC },
    ] }]
  },
  sandwiches: {
    label: 'Sandwiches',
    groups: [{ title: 'Sandwiches', items: [
      { n: 'Cachito', p: 2990, d: 'Jamón y queso' },
      { n: 'Mechada Me Gusta', p: 8300, d: 'Carne mechada, queso derretido y champiñones salteados' },
      { n: 'Mechada Italiana', p: 8300, d: 'Carne mechada, palta, tomate y mayonesa' },
      { n: 'Me Gusta Chicken', p: 7500, d: 'Pollo, queso derretido y champiñones salteados' },
      { n: 'Pollo Italiano', p: 7500, d: 'Pollo a la plancha, palta, tomate y mayonesa' },
      { n: 'Salmón ahumado', p: 9500, d: 'Salmón, queso crema philadelphia, rúcula y alcaparras' },
      { n: 'Pastrami', p: 8200, d: 'Pastrami, cebolla encurtida, pepinillos y aderezo de mostaza' },
      { n: 'Hummus', p: 6200, v: 1, d: 'Hummus, tomates salteados y champiñones, cebolla crispy' },
      { n: 'Seitán Italiano', p: 8500, v: 1 },
      { n: 'Aliade', p: 5800, d: 'Jamón, queso derretido y champiñones' },
      { n: 'Aliade Vegano', p: 6200, v: 1, d: 'Queso derretido y champiñones o tomates cherry' },
      { n: 'Hummus fresco', p: 6500, v: 1, d: 'Hummus, tomates cherry, berros, cebolla encurtida' },
      { n: 'Queso de cabra', p: 7900, d: 'Queso de cabra, tomates cherry salteados, pesto y nueces' },
    ] }]
  },
  completos: {
    label: 'Completos',
    groups: [{ title: 'Completos 22 cm', items: [
      { n: 'Completo', p: 3600 },
      { n: 'Italiano', p: 3800 },
      { n: 'Dinámico', p: 4000 },
      { n: 'Completo vegano', p: 4200, v: 1 },
      { n: 'Italiano vegano', p: 4500, v: 1 },
      { n: 'Dinámico vegano', p: 4700, v: 1 },
    ] }]
  },
  pizzas: {
    label: 'Pizzas',
    groups: [{ title: 'Pizzas tradicionales y veganas', items: [
      { n: 'Pizza a elección', p: 12900, d: 'Masa madre + salsa de tomate casera + mozzarella + 3 toppings: tomates, jamón, champiñones, pesto, rúcula, pepperoni, aceitunas, choclo, alcachofa, carne mechada o tocino' },
    ] }]
  }
};

const money = n => '$' + n.toLocaleString('es-CL');

const tabsEl = document.getElementById('menuTabs');
const panelsEl = document.getElementById('menuPanels');
const catKeys = Object.keys(MENU);

catKeys.forEach((key, i) => {
  const tab = document.createElement('button');
  tab.className = 'menu-tab' + (i === 0 ? ' active' : '');
  tab.textContent = MENU[key].label;
  tab.addEventListener('click', () => showMenuTab(key));
  tab.dataset.key = key;
  tabsEl.appendChild(tab);

  const panel = document.createElement('div');
  panel.className = 'menu-panel' + (i === 0 ? ' active' : '');
  panel.id = 'panel-' + key;
  MENU[key].groups.forEach(group => {
    if (group.title && MENU[key].groups.length > 1) {
      const h = document.createElement('div');
      h.className = 'menu-subhead';
      h.textContent = group.title;
      panel.appendChild(h);
    }
    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    group.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'menu-item';
      row.addEventListener('click', () => openModal(item));

      const leftWrap = document.createElement('div');
      leftWrap.className = 'menu-item-left';

      if (item.img) {
        const photo = document.createElement('img');
        photo.className = 'menu-card-photo';
        photo.src = item.img;
        photo.alt = item.n;
        leftWrap.appendChild(photo);
      }

      const textWrap = document.createElement('div');
      textWrap.className = 'menu-item-text';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'name';
      nameSpan.textContent = item.n;
      textWrap.appendChild(nameSpan);

      if (item.v) {
        const vegTag = document.createElement('span');
        vegTag.className = 'veg-tag';
        vegTag.textContent = 'VEG';
        textWrap.appendChild(vegTag);
      }

      if (item.d) {
        const descDiv = document.createElement('div');
        descDiv.className = 'desc';
        descDiv.textContent = item.d;
        textWrap.appendChild(descDiv);
      }

      const priceDiv = document.createElement('div');
      priceDiv.className = 'price mono';
      priceDiv.textContent = money(item.p);

      leftWrap.appendChild(textWrap);
      row.appendChild(leftWrap);
      row.appendChild(priceDiv);
      grid.appendChild(row);
    });
    panel.appendChild(grid);
  });
  panelsEl.appendChild(panel);
});

function showMenuTab(key) {
  document.querySelectorAll('.menu-tab').forEach(t => t.classList.toggle('active', t.dataset.key === key));
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.toggle('active', p.id === 'panel-' + key));
}

/* ============================================================
   CATERING & EVENTOS — catálogo transcrito del PDF real del
   cliente (CATÁLOGO CÓCTEL 2025-2). Precios de referencia,
   sujetos a confirmación por WhatsApp/email — así se aclara en
   el propio catálogo.
   ============================================================ */
const CATERING_MENU = [
  { cat: 'Cóctel Clásico', items: [
    { n: 'Tapaditos', d: '50 unidades. Ave pimentón / salame - queso crema / quesillo ciboulette / jamón - queso / champiñón o palmito - tomate cherry - lechuga.', p: 33000 },
    { n: 'Empanaditas', d: '50 unidades. Pino / aceituna - queso / napolitana / champiñón - queso / choclo - queso / mechada - queso / espinaca crema - queso.', p: 30000 },
    { n: 'Mini Quiché', d: '50 unidades. Zapallo - queso azul - nueces / cebolla caramelizada - aceitunas - choclo / cebollín - jamón - champiñón / pollo espinaca / espinaca - tomate deshidratado - queso de cabra.', p: 34800 },
    { n: 'Mini Pastel de Choclo', d: '50 unidades. Tacita de masa salada con relleno de pino y pastelera de choclo.', p: 34800 },
    { n: 'Brocheta Capresse', d: '25 unidades. Queso de cabra - tomate cherry - albahaca.', p: 19990 },
    { n: 'Brocheta Mediterránea', d: '25 unidades. Queso - aceituna rellena - tomate cherry - salame.', p: 19990 },
    { n: 'Brocheta Mixta', d: '25 unidades. Pollo - carne - cebolla y pimentón.', p: 27000 },
    { n: 'Brocheta Mar y Tierra', d: '25 unidades. Pollo - carne - camarón.', p: 29000 },
    { n: 'Brochetas de Frutas', d: '50 unidades. Mix de frutas según estación.', p: 32500, v: 1 },
    { n: 'Pinchos', d: '50 unidades. Champiñón - tomate cherry asado / jamón - pepinillo dill / aceituna rellena - salame / queso de cabra - tomate cherry - pesto de albahaca / jamón serrano - melón tuna (producto de temporada).', p: 31000 },
    { n: 'Mini Hamburguesa Queso Cheddar Pepinillo', d: '20 unidades.', p: 21000 },
    { n: 'Mini Barros Luco', d: '20 unidades. Churrasco de vacuno - queso gouda.', p: 21000 },
    { n: 'Mini Lomito Queso', d: '20 unidades. Lomito de cerdo - queso gouda.', p: 21000 },
    { n: 'Mini Pollo Lechuga Mayo', d: '20 unidades.', p: 21000 },
    { n: 'Mini Chacarero', d: '20 unidades. Churrasco - poroto verde - ají verde.', p: 23000 },
    { n: 'Mini Mechada Italiana', d: '20 unidades. Carne de vacuno mechada - tomate - palta (mayonesa aparte).', p: 26000 },
    { n: 'Mini Mechada Queso', d: '20 unidades. Carne de vacuno mechada - queso.', p: 26000 },
    { n: 'Mini Vegetariano', d: '20 unidades. Queso fresco - tomate cherry - champiñón - lechuga.', p: 21000, v: 1 },
    { n: 'Pastelitos Surtidos', d: '50 unidades. Alfajores, merenguitos, pie de limón, alfajor de maicena con mermelada de frambuesa, tacitas con ganache de chocolate y mermelada de frambuesa, delicias, chilenitos, palmeritas, tacitas con pastelera, manzana y nueces.', p: 28000 },
  ]},
  { cat: 'Cóctel Premium', items: [
    { n: 'Bruschettas', d: '50 unidades. Pequeña rebanada de pan tostado con aceite de oliva: salmón con queso Philadelphia y cilantro / camarón, mayonesa y palta / jamón serrano con dip de alcachofas / hummus con tomate cherry asado, pepino y ciboulette / champiñón asado, tomate cherry y aceituna.', p: 57000 },
    { n: 'Ceviche Mixto', d: '24 vasitos. Reineta, camarón, calamar, cebolla morada, pimentón y leche de tigre.', p: 37000 },
    { n: 'Tapaditos Premium', d: '50 unidades. Pastrami con salsa de mostaza / pavo asado con rúcula y mayonesa / queso de cabra con pesto de albahaca y tomates cherry asados / salmón ahumado y queso Philadelphia.', p: 42000 },
    { n: 'Pinchos Premium', d: '50 unidades. Salmón ahumado - pepino - queso Philadelphia / lomo de vacuno salteado - tomate cherry y cebolla morada / berenjena - tomate asado - hummus.', p: 37000 },
    { n: 'Brochetas de Camarones Apanados', d: '12 brochetas de 2 unidades c/u. Camarones ecuatorianos en tempura y panko, en salsa de mango al chipotle.', p: 16000 },
    { n: 'Mini Consomé de Pollo con Crutones', d: '1 litro. Según disponibilidad.', p: null },
    { n: 'Shot de Postres', d: '15 unidades. Mousse de manjar / pie de limón / pie de maracuyá / tiramisú / torta oreo / selva negra / torta frutal.', p: 24000 },
    { n: 'Profiteroles', d: '24 unidades. Pasteles de masa choux rellenos con manjar o crema diplomat (crema pastelera + chantilly).', p: 25000 },
    { n: 'Macarons', d: '24 unidades. Galleta tradicional francesa de frambuesa o chocolate, cobertura crujiente y centro húmedo.', p: 28000 },
  ]},
  { cat: 'Cóctel Vegano', items: [
    { n: 'Canapés Veganos', d: '100 unidades. Hummus con tomate cherry / hummus de betarraga con almendra / not-mayo con palmito y choclito de cóctel / pasta de alcachofa decorada con pimentón.', p: 49900, v: 1 },
    { n: 'Ceviche de Champiñón', d: '25 vasitos.', p: 33000, v: 1 },
    { n: 'Ceviche de Palmitos', d: '25 vasitos.', p: 31000, v: 1 },
    { n: 'Empanaditas Veganas', d: '50 unidades. Pino de soya / choclo - queso / aceituna - queso napolitana / champiñón - queso / chaparrita.', p: 55200, v: 1 },
    { n: 'Tapaditos Veganos', d: '50 unidades. Seitán - tomate - lechuga / hummus - tomate cherry o champiñón / pasta de alcachofa o palmito - baba ganoush con cebolla encurtida en tomate.', p: 52800, v: 1 },
    { n: 'Brochetas Vegetales', d: '50 unidades. Tomate cherry - champiñón - aceituna rellena y alcachofa / berenjena - tomate asado y hummus.', p: 48000, v: 1 },
    { n: 'Mini Hamburguesa Queso', d: '20 unidades.', p: 25200, v: 1 },
    { n: 'Mini Sandwich Ratatouille', d: '20 unidades. Champiñón - cebolla - zapallito italiano - berenjena.', p: 23000, v: 1 },
    { n: 'Mini Quiches de Verduras', d: '20 unidades.', p: 34800, v: 1 },
    { n: 'Mini Cupcakes', d: '12 unidades.', p: 13800, v: 1 },
    { n: 'Tacitas Dulces', d: '20 unidades. Rellenas con mermelada casera, con cobertura y toppings.', p: 27600, v: 1 },
    { n: 'Dulces de Cóctel', d: '100 unidades. Cocadas, galletas, trufas, snickers.', p: 69600, v: 1 },
  ]},
  { cat: 'Para Compartir', items: [
    { n: 'Lasaña Tradicional o Vegana en Alusa', d: '6 personas.', p: 43000 },
    { n: 'Quiches', d: '6 porciones, a elección: pollo-espinaca / cebollín-champiñón-jamón / zapallo-queso azul-nueces / choclo-cebolla caramelizada-aceitunas / espinaca-tomate deshidratado-queso de cabra.', p: 23000 },
    { n: 'Pastel de Choclo Tradicional o Vegano en Alusa', d: '6 porciones.', p: 43000 },
    { n: 'Ceviche de Champiñón + Galletas', d: '1/2 kilo.', p: 25000, v: 1 },
    { n: 'Ceviche de Palmitos + Galletas', d: '1/2 kilo.', p: 25000, v: 1 },
    { n: 'Crudo + Salsa de Pepinillos + Galletas', d: '1/2 kilo.', p: 32600 },
    { n: 'Tabla Picoteo Tradicional', d: 'Quesos, jamón, salame, grissines, galletas, palmitos, pepinillos dill, aceitunas, uvas o frutillas, papitas nativas, dip, frutos secos, brochetas capresse, huevitos de codorniz. Disponible en 1 metro ($80.000) o 60 cm ($60.000).', p: null },
    { n: 'Tabla Picoteo Vegana', d: 'Hummus, baba ganoush, dip de alcachofa, pepinillos, aceitunas, champiñones, fruta, frutos secos, mix de brochetas veganas, galletas, papas, pan masa madre. Disponible en 1 metro ($80.000) o 60 cm ($60.000).', p: null, v: 1 },
    { n: 'Postres para Compartir', d: '8 porciones. Pie de limón o kuchen de nuez.', p: 22000 },
    { n: 'Brazo de Reina', d: 'Completo.', p: 15000 },
  ]},
  { cat: 'Candy Bar', items: [
    { n: 'Cakepops', d: '12 unidades. Mini tortas hechas bolitas, cubiertas con chocolate y decoraciones.', p: 7200 },
    { n: 'Mini Cupcakes', d: '12 unidades. Bizcocho de vainilla o chocolate cubierto de crema o ganache y decorado.', p: 8400 },
    { n: 'Alfajores Decorados', d: '12 unidades. Alfajor de maicena relleno de manjar, bañado en chocolate y decorado con colores y confites.', p: 8400 },
    { n: 'Shot de Postres', d: '15 unidades. Mousse de manjar / pie de limón / pie de maracuyá / tiramisú / torta oreo / selva negra / torta frutal.', p: 24000 },
    { n: 'Pastelitos Surtidos', d: '50 unidades.', p: 28000 },
    { n: 'Profiteroles', d: '24 unidades.', p: 25000 },
    { n: 'Macarons', d: '24 unidades.', p: 28000 },
    { n: 'Brochetas de Frutas', d: '50 unidades.', p: 32500, v: 1 },
    { n: 'Mini Cupcakes Veganos', d: '12 unidades. Bizcocho de vainilla o chocolate cubierto de crema o ganache y decorado.', p: 13800, v: 1 },
    { n: 'Tacitas Dulces Veganas', d: '20 unidades. Rellenas con mermelada casera, con cobertura y toppings.', p: 27600, v: 1 },
    { n: 'Dulces de Cóctel Veganos', d: '100 unidades. Cocadas, galletas, trufas, snickers.', p: 69600, v: 1 },
    { n: 'Alfajores Decorados Veganos', d: '12 unidades.', p: 12000, v: 1 },
  ]},
  { cat: 'Cumpleaños', items: [
    { n: 'Mini Hamburguesa', d: '20 unidades. Con queso cheddar y pepinillo.', p: 21000 },
    { n: 'Mini Barros Luco', d: '20 unidades. Churrasco de vacuno, queso gouda.', p: 21000 },
    { n: 'Mini Lomito Queso', d: '20 unidades. Lomito de cerdo, queso gouda.', p: 21000 },
    { n: 'Mini Pollo Lechuga Mayo', d: '20 unidades.', p: 21000 },
    { n: 'Mini Chacarero', d: '20 unidades. Churrasco, poroto verde, ají verde.', p: 23000 },
    { n: 'Mini Mechada Italiana', d: '20 unidades.', p: 26000 },
    { n: 'Mini Mechada Queso', d: '20 unidades.', p: 26000 },
    { n: 'Mini Vegetariano', d: '20 unidades.', p: 21000, v: 1 },
    { n: 'Mini Pizza', d: '20 unidades. Queso, jamón, tomate, aceituna.', p: 16000 },
    { n: 'Mini Hotdog', d: '20 unidades. Salchicha y aderezos (mayonesa, ketchup, mostaza).', p: 18000 },
    { n: 'Mini Hamburguesa Queso Vegana', d: '20 unidades.', p: 25200, v: 1 },
    { n: 'Mini Pizza Vegana', d: '20 unidades. Queso, tomate, aceituna.', p: 22000, v: 1 },
    { n: 'Mini Hotdog Vegano', d: '20 unidades. Salchicha y aderezos.', p: 24000, v: 1 },
  ]},
  { cat: 'Promociones', items: [
    { n: 'Promo 1 · 7 personas', d: '10 pinchos, 20 tapaditos, 10 empanaditas, 15 mini quiches, 20 dulces.', p: 42000 },
    { n: 'Promo 2 · 7-8 personas', d: '25 mini pastel de choclo, 25 tapaditos, 10 brochetas mediterráneas, 15 empanaditas.', p: 45600 },
    { n: 'Promo 3 · 10 personas', d: '20 bruschettas, 30 tapaditos, 15 pinchos, 30 dulces.', p: 52800 },
    { n: 'Promo 4 · 12 personas', d: '20 mini quiche, 30 tapaditos, 15 pinchos, 20 mini pastel de choclo, 15 bruschettas, 40 dulces.', p: 75600 },
    { n: 'Promo 5 · 15 personas', d: '20 pinchos, 20 mini quiche, 20 tapaditos, 30 dulces, 20 brochetas mixtas, 20 pastel de jaiba.', p: 96000 },
    { n: 'Promo 6 · 25 personas', d: '50 pastel de jaiba, 100 tapaditos premium, 50 brochetas mar y tierra, 50 bruschettas, 30 shot de postre.', p: 169800 },
    { n: 'Promo 7 · 25 personas', d: '60 mini quiches, 60 empanaditas, 50 tapaditos clásicos, 60 mini barros luco, 50 dulces.', p: 196200 },
    { n: 'Pack Vegano · 100 bocados', d: '20 canapés, 20 tapaditos, 20 brochetas vegetales, 20 empanaditas, 20 dulces.', p: 85800, v: 1 },
    { n: 'Tabla de Regalo', d: 'Quesos, fiambres, uvas o frutilla, galletas y grissines, aceitunas, semillas de calabaza y cranberries, dip, brochetas capresse, botellita de espumante o vino.', p: 75600 },
  ]},
];

const cateringTabsEl = document.getElementById('cateringTabs');
const cateringPanelsEl = document.getElementById('cateringPanels');
const cateringCatKeys = CATERING_MENU.map(g => g.cat);
let activeCateringCat = 'Todos';

function renderCateringFilters() {
  const cats = ['Todos', ...cateringCatKeys];
  cateringTabsEl.innerHTML = '';
  cats.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (c === activeCateringCat ? ' active' : '');
    btn.textContent = c;
    btn.dataset.cat = c;
    btn.addEventListener('click', () => { activeCateringCat = c; renderCateringFilters(); renderCateringMenu(); });
    cateringTabsEl.appendChild(btn);
  });
}

function renderCateringMenu() {
  const groups = activeCateringCat === 'Todos' ? CATERING_MENU : CATERING_MENU.filter(g => g.cat === activeCateringCat);
  cateringPanelsEl.innerHTML = '';
  groups.forEach(g => {
    const block = document.createElement('div');
    block.className = 'menu-cat-block';

    const h3 = document.createElement('h3');
    h3.style.cssText = "font-family:'Baloo 2',sans-serif; font-weight:800; font-size:1.4rem; margin-bottom:14px; padding-bottom:8px; border-bottom:1px solid rgba(23,20,15,0.12); color:var(--text);";
    h3.textContent = g.cat;
    block.appendChild(h3);

    const grid = document.createElement('div');
    grid.className = 'menu-grid';
    g.items.forEach(item => {
      const row = document.createElement('div');
      row.className = 'menu-item static';

      const textWrap = document.createElement('div');
      textWrap.className = 'menu-item-text';

      const nameSpan = document.createElement('span');
      nameSpan.className = 'name';
      nameSpan.textContent = item.n;
      textWrap.appendChild(nameSpan);

      if (item.v) {
        const vegTag = document.createElement('span');
        vegTag.className = 'veg-tag';
        vegTag.textContent = 'VEG';
        textWrap.appendChild(vegTag);
      }

      if (item.d) {
        const descDiv = document.createElement('div');
        descDiv.className = 'desc';
        descDiv.textContent = item.d;
        textWrap.appendChild(descDiv);
      }

      const priceDiv = document.createElement('div');
      priceDiv.className = 'price mono';
      priceDiv.textContent = item.p === null ? 'Consultar' : money(item.p);

      row.appendChild(textWrap);
      row.appendChild(priceDiv);
      grid.appendChild(row);
    });
    block.appendChild(grid);
    cateringPanelsEl.appendChild(block);
  });
}

renderCateringFilters();
renderCateringMenu();

/* ---------- MODAL PRODUCTO ---------- */
let currentItem = null;
function openModal(item) {
  currentItem = item;
  document.getElementById('modalName').textContent = item.n + (item.v ? ' (vegano/vegetariano)' : '');
  document.getElementById('modalPrice').textContent = money(item.p);
  document.getElementById('modalDesc').textContent = item.d || 'Preparado del día en Me Gusta.';
  const modalPhoto = document.getElementById('modalPhoto');
  if (item.img) { modalPhoto.src = item.img; modalPhoto.classList.remove('hidden'); }
  else { modalPhoto.classList.add('hidden'); modalPhoto.removeAttribute('src'); }
  toggleModal(true);
}
document.getElementById('modalAddBtn').addEventListener('click', () => {
  addToCart(currentItem);
  toggleModal(false);
  toggleCart(true);
});
function toggleModal(open) { document.getElementById('modalOverlay').classList.toggle('open', open); }

/* ---------- CARRITO ---------- */
let cart = [];
let deliveryMode = 'retiro';

document.querySelectorAll('.delivery-opt').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.delivery-opt').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    deliveryMode = btn.dataset.mode;
    renderCart();
  });
});

function addToCart(item) {
  const existing = cart.find(c => c.n === item.n);
  if (existing) { existing.qty++; } else { cart.push({ ...item, qty: 1 }); }
  renderCart();
}
function changeQty(name, delta) {
  const line = cart.find(c => c.n === name);
  if (!line) return;
  line.qty += delta;
  if (line.qty <= 0) cart = cart.filter(c => c.n !== name);
  renderCart();
}
function renderCart() {
  const linesEl = document.getElementById('cartLines');
  const count = cart.reduce((a, c) => a + c.qty, 0);
  document.getElementById('cartCount').textContent = count;
  linesEl.innerHTML = '';
  if (cart.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'cart-empty';
    empty.textContent = 'Todavía no agregaste nada.';
    linesEl.appendChild(empty);
  } else {
    cart.forEach(c => {
      const line = document.createElement('div');
      line.className = 'cart-line';

      const left = document.createElement('div');
      const name = document.createElement('div');
      name.className = 'name';
      name.textContent = c.n;

      const qtyCtrl = document.createElement('div');
      qtyCtrl.className = 'qty-ctrl';

      const minusBtn = document.createElement('button');
      minusBtn.className = 'qty-btn';
      minusBtn.type = 'button';
      minusBtn.textContent = '–';
      minusBtn.addEventListener('click', () => changeQty(c.n, -1));

      const qtySpan = document.createElement('span');
      qtySpan.className = 'mono';
      qtySpan.textContent = c.qty;

      const plusBtn = document.createElement('button');
      plusBtn.className = 'qty-btn';
      plusBtn.type = 'button';
      plusBtn.textContent = '+';
      plusBtn.addEventListener('click', () => changeQty(c.n, 1));

      qtyCtrl.appendChild(minusBtn);
      qtyCtrl.appendChild(qtySpan);
      qtyCtrl.appendChild(plusBtn);
      left.appendChild(name);
      left.appendChild(qtyCtrl);

      const lineTotal = document.createElement('div');
      lineTotal.className = 'mono';
      lineTotal.textContent = money(c.p * c.qty);

      line.appendChild(left);
      line.appendChild(lineTotal);
      linesEl.appendChild(line);
    });
  }
  const total = cart.reduce((a, c) => a + c.p * c.qty, 0);
  document.getElementById('cartTotal').textContent = money(total);
  updateCheckoutLink(total);
}
function updateCheckoutLink(total) {
  let msg = 'Hola! Quiero hacer este pedido en Me Gusta (' + (deliveryMode === 'retiro' ? 'retiro en local' : 'despacho') + '):%0A%0A';
  cart.forEach(c => { msg += '• ' + c.n + ' x' + c.qty + ' — ' + money(c.p * c.qty) + '%0A'; });
  msg += '%0ATotal: ' + money(total);
  document.getElementById('checkoutBtn').href = 'https://wa.me/56979505113?text=' + msg;
}
function toggleCart(open) { document.getElementById('cartOverlay').classList.toggle('open', open); }
document.getElementById('cartFab').addEventListener('click', () => toggleCart(true));
document.getElementById('cartBtn').addEventListener('click', () => toggleCart(true));
document.getElementById('cartCloseBtn').addEventListener('click', () => toggleCart(false));
document.getElementById('modalCloseBtn').addEventListener('click', () => toggleModal(false));
renderCart();

/* ---------- INDICADOR ABIERTO/CERRADO EN VIVO (horario real de Instagram / Maps) ---------- */
(function () {
  const dot = document.getElementById('statusDot');
  const text = document.getElementById('statusText');
  const visitStatus = document.getElementById('visit-status');
  const now = new Date();
  const day = now.getDay(); // 0 dom ... 6 sáb
  const minutes = now.getHours() * 60 + now.getMinutes();
  let openMin, closeMin;
  if (day >= 1 && day <= 3) { openMin = 10 * 60; closeMin = 21 * 60; }        // Lun-Mié
  else if (day >= 4 && day <= 6) { openMin = 10 * 60; closeMin = 24 * 60; }   // Jue-Sáb
  else { openMin = 11 * 60; closeMin = 21 * 60; }                            // Dom
  const isOpen = minutes >= openMin && minutes < closeMin;
  const label = isOpen ? 'Abierto ahora' : 'Cerrado ahora';
  text.textContent = label;
  dot.classList.toggle('closed', !isOpen);
  if (visitStatus) {
    visitStatus.textContent = label;
    visitStatus.className = 'mono';
    visitStatus.style.cssText = 'font-size:0.72rem; letter-spacing:0.1em; text-transform:uppercase; color:' + (isOpen ? '#8bc53f' : '#d9694f') + ';';
  }
})();
