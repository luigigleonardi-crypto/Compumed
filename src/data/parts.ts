export type PartCategory = 'cpu' | 'motherboard' | 'ram' | 'storage' | 'gpu';

export interface Part {
  id: string;
  category: PartCategory;
  name: string;
  price: number;
  socket?: string;
}

export const parts: Part[] = [
  // CPUs
  { id: 'cpu-i3', category: 'cpu', name: 'Intel Core i3', price: 600, socket: 'LGA1700' },
  { id: 'cpu-i5', category: 'cpu', name: 'Intel Core i5', price: 1100, socket: 'LGA1700' },
  { id: 'cpu-r5', category: 'cpu', name: 'AMD Ryzen 5', price: 950, socket: 'AM4' },
  { id: 'cpu-r7', category: 'cpu', name: 'AMD Ryzen 7', price: 1600, socket: 'AM5' },

  // Motherboards
  { id: 'mb-h610', category: 'motherboard', name: 'Placa Mãe H610M (Intel)', price: 450, socket: 'LGA1700' },
  { id: 'mb-b660', category: 'motherboard', name: 'Placa Mãe B660M (Intel)', price: 750, socket: 'LGA1700' },
  { id: 'mb-a320', category: 'motherboard', name: 'Placa Mãe A320M (AMD)', price: 350, socket: 'AM4' },
  { id: 'mb-b550', category: 'motherboard', name: 'Placa Mãe B550M (AMD)', price: 650, socket: 'AM4' },
  { id: 'mb-b650', category: 'motherboard', name: 'Placa Mãe B650M (AMD)', price: 1200, socket: 'AM5' },

  // RAM
  { id: 'ram-8', category: 'ram', name: '8GB Memória RAM', price: 150 },
  { id: 'ram-16', category: 'ram', name: '16GB Memória RAM', price: 280 },
  { id: 'ram-32', category: 'ram', name: '32GB Memória RAM', price: 550 },

  // Storage
  { id: 'ssd-256', category: 'storage', name: 'SSD 256GB', price: 180 },
  { id: 'ssd-512', category: 'storage', name: 'SSD 512GB', price: 300 },
  { id: 'ssd-1tb', category: 'storage', name: 'SSD 1TB', price: 500 },

  // GPU
  { id: 'gpu-none', category: 'gpu', name: 'Nenhuma (Usar do Processador)', price: 0 },
  { id: 'gpu-1650', category: 'gpu', name: 'NVIDIA GTX 1650', price: 850 },
  { id: 'gpu-3060', category: 'gpu', name: 'NVIDIA RTX 3060', price: 1800 },
  { id: 'gpu-4060', category: 'gpu', name: 'NVIDIA RTX 4060', price: 2200 },
];

export const predefinedBuilds = {
  internet_jogar: [
    { name: 'FIFA 26 e Estudos', price: 4250, desc: 'Este PC roda o jogo liso e é ótimo para suas aulas.', specs: 'Ryzen 5, 16GB RAM, SSD 500GB, Placa RTX 3050' },
  ],
  trabalho_pesado: [
    { name: 'After Effects e AutoCAD', price: 8500, desc: 'Máquina pesada para quem usa After Effects e programas de engenharia sem travar.', specs: 'Ryzen 9, 64GB RAM, SSD 1TB NVMe, Placa RTX 4060' },
  ]
};
