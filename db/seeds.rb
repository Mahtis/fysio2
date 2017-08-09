# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
pc = PublicationCreator.new
pc.create_layers('seed_layers.json');
pc.create_layer_types('seed_layer_types.json');
pc.create_categories('seed_categories.json');
pc.create_publications('seed_publications.json');
pc.create_links('seed_links.json');
