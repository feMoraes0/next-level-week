import Knex from "knex";

export async function seed(knex: Knex) {
  knex('items').insert([
    {
      'title': 'Lâmpadas',
      'image': 'lampadas.svg'
    },
    {
      'title': 'Pilhas e Baterias',
      'image': 'baterias.svg'
    },
    {
      'title': 'Papeis e Papelão',
      'image': 'papeis-papelao.svg'
    },
    {
      'title': 'Resíduos Eletronicos',
      'image': 'eletronicos.svg'
    },
    {
      'title': 'Resídeos Orgânicos',
      'image': 'organicos.svg'
    },
    {
      'title': 'Óleo de cozinha',
      'image': 'oleo.svg'
    },
  ]);
}