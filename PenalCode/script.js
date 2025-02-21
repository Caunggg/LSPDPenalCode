// Array data penal lengkap
const penalData = [
    { id: 101, desc: "Criminal Threats", times: 30, fines: 500 },
    { id: 102, desc: "Assault", times: 25, fines: 600 },
    { id: 103, desc: "Assault on a Peace Officer", times: 30, fines: 650 },
    { id: 104, desc: "Assault on a State Employee", times: 40, fines: 700 },
    { id: 105, desc: "Assault with a Deadly Weapon", times: 40, fines: 1150 },
    { id: 106, desc: "Assault with a Deadly Weapon on a Peace Officer", times: 50, fines: 1200 },
    { id: 107, desc: "Battery", times: 24, fines: 450 },
    { id: 108, desc: "Battery on a Peace Officer", times: 30, fines: 500 },
    { id: 109, desc: "Battery on a State Employee", times: 30, fines: 500 },
    { id: 110, desc: "Aggravated Battery", times: 36, fines: 850 },
    { id: 111, desc: "Manslaughter", times: 72, fines: 1000 },
    { id: 112, desc: "False Imprisonment", times: 36, fines: 650 },
    { id: 113, desc: "Kidnapping", times: 56, fines: 660 },
    { id: 114, desc: "Mayhem", times: 82, fines: 1000 },
    { id: 115, desc: "Stalking", times: 12, fines: 350 },
    { id: 116, desc: "Human Trafficking", times: 36, fines: 750 },
    { id: 185, desc: "Wearing a Mask or Disguise to Evade Police", times: 4, fines: 150 },
    { id: 187, desc: "Murder", times: 132, fines: 1500 },
    { id: 188, desc: "Attempted Murder", times: 56, fines: 950 },
    { id: 211, desc: "Robbery", times: 30, fines: 650 },
    { id: 215, desc: "Carjacking", times: 30, fines: 450 },
    { id: 216, desc: "Rape", times: 56, fines: 540 },
    { id: 217, desc: "Lewd Or Dissolute Conduct In Public", times: 12, fines: 250 },
    { id: 218, desc: "Indecent Exposure", times: 14, fines: 300 },
    { id: 219, desc: "Sexual Assault", times: 24, fines: 450 },
    { id: 220, desc: "Sexual Battery", times: 30, fines: 350 },
    { id: 221, desc: "Prostitution", times: 8, fines: 150 },
    { id: 222, desc: "Solicitation of a Prostitute", times: 8, fines: 150 },
    { id: 223, desc: "Pandering / Pimping", times: 20, fines: 250 },
    { id: 224, desc: "Statutory Rape", times: 18, fines: 250 },
    { id: 225, desc: "Child Abuse", times: 35, fines: 550 },
    { id: 226, desc: "Possession of Child Pornography", times: 65, fines: 1000 },
    { id: 227, desc: "Solicitation of a Minor", times: 24, fines: 450 },
    { id: 228, desc: "Minor Alcohol Violation", times: 0, fines: 2500 },
    { id: 229, desc: "Sale of Alcohol to a Minor", times: 4, fines: 50 },
    { id: 230, desc: "Animal Abuse / Cruelty", times: 16, fines: 200 },
    { id: 232, desc: "Sale of Tobacco to a Minor", times: 4, fines: 50 },
    { id: 301, desc: "Littering", times: 0, fines: 300 },
    { id: 302, desc: "Illegally Discharging a Firearm", times: 4, fines: 100 },
    { id: 303, desc: "Shooting At An Inhabited Dwelling Or Occupied Car", times: 36, fines: 550 },
    { id: 304, desc: "Possession of a Controlled Substance Other than Marijuana", times: 4, fines: 100 },
    { id: 305, desc: "Possession of a Controlled Substance Other than Marijuana with Intent To Sell", times: 24, fines: 350 },
    { id: 306, desc: "Possession of Drug Paraphernalia", times: 4, fines: 50 },
    { id: 307, desc: "Maintaining A Place For The Purpose Of Distribution", times: 28, fines: 450 },
    { id: 308, desc: "Manufacture of a Controlled Substance", times: 48, fines: 550 },
    { id: 309, desc: "Sale of a Controlled Substance Other than Marijuana", times: 36, fines: 350 },
    { id: 310, desc: "Sale of a Controlled Substance", times: 14, fines: 150 },
    { id: 311, desc: "Possession of an Open Container", times: 0, fines: 500 },
    { id: 312, desc: "Public Intoxication", times: 4, fines: 40 },
    { id: 313, desc: "Under The Influence of a Controlled Substance", times: 5, fines: 50 },
    { id: 314, desc: "Possession of Marijuana", times: 6, fines: 50 },
    { id: 315, desc: "Possession of an Unlicensed Firearm", times: 40, fines: 450 },
    { id: 316, desc: "Possession of a Destructive Device", times: 30, fines: 450 },
    { id: 317, desc: "Manufacture of a Destructive Device or Prohibited Weapon", times: 32, fines: 500 },
    { id: 318, desc: "Illegal Sale, Lease, or Transfer of a Firearm", times: 60, fines: 800 },
    { id: 319, desc: "Drive-By Shooting", times: 16, fines: 350 },
    { id: 320, desc: "Weapons License Violation", times: 50, fines: 500 },
    { id: 321, desc: "Failure to Report a Stolen Firearm", times: 4, fines: 50 },
    { id: 322, desc: "Illegal Distribution of Ammunition", times: 30, fines: 550 },
    { id: 323, desc: "Terrorism", times: 1000, fines: 10000 },
    { id: 324, desc: "Treason", times: 1000, fines: 10000 },
    { id: 401, desc: "Unlawful Assembly", times: 4, fines: 50 },
    { id: 402, desc: "Incitement to Riot", times: 20, fines: 450 },
    { id: 403, desc: "Riot", times: 8, fines: 50 },
    { id: 404, desc: "Brandishing a Firearm", times: 12, fines: 150 },
    { id: 405, desc: "Brandishing a Deadly Weapon", times: 20, fines: 250 },
    { id: 406, desc: "Unauthorized Entry or Remaining on an Emergency Site", times: 10, fines: 250 },
    { id: 415, desc: "Disturbing the Peace", times: 3, fines: 20 },
    { id: 459, desc: "Burglary", times: 20, fines: 250 },
    { id: 501, desc: "Embezzlement", times: 8, fines: 50 },
    { id: 502, desc: "Arson", times: 32, fines: 550 },
    { id: 503, desc: "Possession of Burglary Tools", times: 8, fines: 20 },
    { id: 504, desc: "Forgery", times: 6, fines: 50 },
    { id: 505, desc: "Forgery of a State Document", times: 15, fines: 250 },
    { id: 506, desc: "Counterfeiting", times: 12, fines: 124 },
    { id: 507, desc: "Petty Theft", times: 8, fines: 50 },
    { id: 508, desc: "Grand Theft", times: 15, fines: 250 },
    { id: 509, desc: "Extortion", times: 22, fines: 356 },
    { id: 510, desc: "Receiving Stolen Property", times: 6, fines: 70 },
    { id: 511, desc: "Insurance Fraud", times: 14, fines: 434 },
    { id: 512, desc: "Trespass", times: 8, fines: 80 },
    { id: 513, desc: "Fraud", times: 18, fines: 560 },
    { id: 514, desc: "Vandalism", times: 8, fines: 80 },
    { id: 601, desc: "Bribery", times: 25, fines: 240 },
    { id: 602, desc: "Jury Tampering", times: 8, fines: 80 },
    { id: 603, desc: "Intimidating a Witness or Victim", times: 20, fines: 250 },
    { id: 604, desc: "Escape", times: 40, fines: 650 },
    { id: 605, desc: "Aiding in the Escape from State Custody", times: 30, fines: 550 },
    { id: 606, desc: "Perjury", times: 16, fines: 168 },
    { id: 607, desc: "Filing a False Report", times: 8, fines: 80 },
    { id: 608, desc: "Filing a False Complaint", times: 8, fines: 50 },
    { id: 609, desc: "Corruption of Public Duty", times: 30, fines: 360 },
    { id: 610, desc: "Obstruction of Justice", times: 6, fines: 60 },
    { id: 611, desc: "Resisting a Peace Officer", times: 10, fines: 100 },
    { id: 612, desc: "Failure To Pay A Fine", times: 8, fines: 80 },
    { id: 613, desc: "Failure to Identify to a Peace Officer", times: 4, fines: 40 },
    { id: 614, desc: "Impersonation of a State Employee", times: 8, fines: 80 },
    { id: 615, desc: "Making a False Report of an Emergency", times: 8, fines: 80 },
    { id: 616, desc: "Evidence Tampering", times: 35, fines: 535 },
    { id: 617, desc: "Introduction of Contraband", times: 36, fines: 830 },
    { id: 618, desc: "Violation of Parole", times: 48, fines: 480 },
    { id: 619, desc: "Voter Fraud / Voter Pandering", times: 52, fines: 524 },
    { id: 620, desc: "Corruption of Public Office", times: 64, fines: 645 },
    { id: 621, desc: "Contempt of Senate", times: 8, fines: 80 },
    { id: 622, desc: "Contempt of Court", times: 8, fines: 80 },
    { id: 623, desc: "Subpoena Violation", times: 8, fines: 80 },
    { id: 701, desc: "Reckless Driving", times: 20, fines: 350 },
    { id: 702, desc: "Felony Reckless Driving", times: 28, fines: 540 },
    { id: 703, desc: "Driving Under the Influence", times: 24, fines: 246 },
    { id: 704, desc: "Evading a Peace Officer", times: 16, fines: 156 },
    { id: 705, desc: "Reckless Evading of a Peace Officer", times: 36, fines: 365 },
    { id: 706, desc: "Hit and Run", times: 35, fines: 464 },
    { id: 801, desc: "Brandishing a Firearm", times: 20, fines: 1000 },
    { id: 802, desc: "Discharging a Firearm in Public", times: 20, fines: 500 },
    { id: 803, desc: "Unlicensed Possession of a Deadly Weapon", times: 20, fines: 760 },
    { id: 804, desc: "Possession of an Unlcensed Firearm", times: 25, fines: 850 },
    { id: 805, desc: "Possession of an Illegal Firearm", times: 40, fines: 600 },
    { id: 806, desc: "Firearm Theft", times: 50, fines: 930 },
    { id: 807, desc: "Illegal Firearm Distribution", times: 30, fines: 910 }
  ];
  
  /* Array untuk menyimpan penal yang dipilih user */
  let selectedPenals = [];
  
  /* Fungsi untuk menambahkan penal berdasarkan input Penal ID */
  function addPenal() {
    const input = document.getElementById("penalIdInput");
    const penalId = parseInt(input.value);
  
    if (!penalId) {
      alert("Masukkan Penal ID yang valid!");
      return;
    }
  
    // Cari penal dengan ID tersebut dalam penalData
    const found = penalData.find(item => item.id === penalId);
    if (!found) {
      alert("Penal ID tidak ditemukan!");
      return;
    }
  
    // Cek jika penal sudah ada dalam daftar terpilih
    if (selectedPenals.find(item => item.id === penalId)) {
      alert("Penal ID sudah ada di daftar!");
      return;
    }
  
    // Tambahkan penal ke array selectedPenals
    selectedPenals.push(found);
  
    // Bersihkan input dan render ulang tabel penal terpilih
    input.value = "";
    renderSelectedPenals();
  }
  
  /* Fungsi untuk menghapus penal dari daftar */
  function removePenal(id) {
    selectedPenals = selectedPenals.filter(item => item.id !== id);
    renderSelectedPenals();
  }
  
  /* Fungsi untuk merender ulang tabel penal terpilih dan menghitung total */
  function renderSelectedPenals() {
    const tbody = document.querySelector("#selectedPenalTable tbody");
    tbody.innerHTML = "";
  
    let totalTimes = 0;
    let totalFines = 0;
  
    selectedPenals.forEach(item => {
      totalTimes += item.times;
      totalFines += item.fines;
  
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.desc}</td>
        <td>${item.times}</td>
        <td>${item.fines}</td>
        <td><button class="btn" onclick="removePenal(${item.id})">Hapus</button></td>
      `;
      tbody.appendChild(row);      
    });
  
    // Menambahkan " Minutes" dan "$" ke total masing-masing
    document.getElementById("totalTimes").textContent = totalTimes + " Minutes";
    document.getElementById("totalFines").textContent = "$" + totalFines;
  }
  
  
  /* Inisialisasi DataTables saat dokumen sudah siap */
  $(document).ready(function() {
    $('#penalTable').DataTable({
      "pageLength": 10
    });
  });
// Fungsi untuk menghapus semua penal code yang sudah ditambahkan
function clearAllPenals() {
  if (confirm("Apakah Anda yakin ingin menghapus semua penal code?")) {
    selectedPenals = [];
    renderSelectedPenals();
  }
}
