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
        { n: 'Latte', p: 3300 },
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
      { n: 'Brunch Me Gusta', p: 15300, d: 'Huevos revueltos o pochados, palta, tomate, mix verde, hummus y pan de masa madre + latte, americano, jugo o tetera + 3 mini snickers + fruta' },
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

      row.appendChild(textWrap);
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

/* ---------- MODAL PRODUCTO ---------- */
let currentItem = null;
function openModal(item) {
  currentItem = item;
  document.getElementById('modalName').textContent = item.n + (item.v ? ' (vegano/vegetariano)' : '');
  document.getElementById('modalPrice').textContent = money(item.p);
  document.getElementById('modalDesc').textContent = item.d || 'Preparado del día en Me Gusta.';
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
