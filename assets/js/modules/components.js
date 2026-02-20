import { state } from './state.js';

export function renderNavbar() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
        <div class="container nav-wrapper">
            <a href="#home" style="font-weight:800; text-decoration:none; color:var(--dried-sage)">TADARUS TUTOR</a>
            <div style="display:flex; gap:20px">
                <a href="#tutors">Cari Guru</a>
                <a href="#ebook">E-Book</a>
                <a href="#register">Gabung Mitra</a>
            </div>
        </div>
    `;
}

export function renderHome() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <section style="text-align:center">
            <h1 style="font-size:3rem; color:var(--dried-sage)">Belajar Alquran<br>Jadi Lebih Personal</h1>
            <p>Hubungkan dirimu dengan pengajar bersertifikasi.</p>
            <br>
            <a href="#tutors" class="btn btn-primary">Mulai Belajar</a>
        </section>
    `;
    return container;
}

export function renderTutorList() {
    const section = document.createElement('section');
    section.className = 'container';
    
    const title = document.createElement('h2');
    title.textContent = 'Daftar Pengajar';
    section.appendChild(title);

    const filterDiv = document.createElement('div');
    filterDiv.innerHTML = `
        <select id="filterPrice">
            <option value="all">Semua Harga</option>
            <option value="100000">Di bawah 100rb</option>
        </select>
    `;
    section.appendChild(filterDiv);

    const grid = document.createElement('div');
    grid.className = 'grid';
    
    state.tutors.forEach(tutor => {
        grid.appendChild(createTutorCard(tutor));
    });

    section.appendChild(grid);
    return section;
}

function createTutorCard(tutor) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const img = document.createElement('img');
    img.src = tutor.img;
    img.loading = 'lazy';
    img.style.width = '100px';
    img.style.borderRadius = '50%';

    const name = document.createElement('h3');
    name.textContent = tutor.name;

    const price = document.createElement('p');
    price.textContent = `Rp ${tutor.price.toLocaleString()} / Sesi`;
    price.style.color = 'var(--faded-rust)';
    price.style.fontWeight = 'bold';

    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.style.width = '100%';
    btn.textContent = 'Pesan Jadwal';
    btn.onclick = () => window.open(`https://wa.me/628123456789?text=Halo ${tutor.name}, saya ingin belajar.`);

    card.append(img, name, price, btn);
    return card;
}

export function renderRegister() {
    const container = document.createElement('div');
    container.className = 'container';
    container.innerHTML = `
        <section>
            <h2>Pendaftaran Mitra Pengajar</h2>
            <form id="regForm">
                <input type="text" placeholder="Nama Lengkap" required>
                <input type="tel" id="waInput" placeholder="Nomor WhatsApp (Contoh: 0812...)" required>
                <select required>
                    <option value="">Pilih Keahlian</option>
                    <option value="tahsin">Tahsin</option>
                    <option value="tahfidz">Tahfidz</option>
                </select>
                <button type="submit" class="btn btn-primary">Kirim Lamaran</button>
            </form>
        </section>
    `;

    container.querySelector('#regForm').onsubmit = (e) => {
        e.preventDefault();
        const wa = container.querySelector('#waInput').value;
        if(!wa.startsWith('08')) return alert('Gunakan format 08...');
        alert('Lamaran berhasil dikirim!');
        window.location.hash = '#home';
    };

    return container;
}

export function renderEbook() {
    const div = document.createElement('div');
    div.className = 'container';
    div.innerHTML = '<h2>E-Book & Modul</h2><div class="grid"></div>';
    return div;
}

export function renderVideo() {
    const div = document.createElement('div');
    div.className = 'container';
    div.innerHTML = '<h2>Video Pembelajaran</h2><div class="grid"></div>';
    return div;
}

export function renderFooter() {
    const footer = document.getElementById('footer');
    footer.className = 'container';
    footer.style.padding = '40px 20px';
    footer.style.borderTop = '1px solid var(--dried-sage)';
    footer.innerHTML = `<p>&copy; 2026 Tadarus Tutor Indonesia.</p>`;
}
