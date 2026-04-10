/* ============================================
   Republiek Bloemendaal — Menu Page Scripts
============================================ */

function showTab(id, btn) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  btn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}