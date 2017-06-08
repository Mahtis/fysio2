# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Layer.create([{name: 'Application'}, {name: 'Logic'}, {name: 'Indicies'}, {name: 'Metrics'}, {name: 'Signal'}]);

publications = Publication.create([{name: 'Audio Biofeedback for Poker Players', abstract: 'Abstract text here', year: 2001, journal: 'Nature'},
                                   {name: 'Neurofeedback Meditation in Virtual Reality', abstract: 'Abstract text here', year: 2005, journal: 'Science'},
                                   {name: 'Relevance Annotation for Scientific Text', abstract: 'Abstract text here', year: 2007, journal: 'Nature Neuroscience'},
                                   {name: 'Affective Annotation for News Reading', abstract: 'Abstract text here', year: 2016, journal: 'Current Biology'},
                                   {name: 'Humor Detection', abstract: 'Abstract text here', year: 2016, journal: 'Science'},
                                   {name: 'Datamining Phys. Data for Game Design', abstract: 'Abstract text here', year: 2013, journal: 'Nature'}]);

publications[0].links.create({url: 'www.nature.com', publication_id: 1, link_type: 'web'});
publications[1].links.create({url: 'www.science.com', publication_id: 2, link_type: 'web'});
publications[1].links.create({url: 'www.github.com', publication_id: 2, link_type: 'github'});
publications[2].links.create({url: 'www.suomi24.fi', publication_id: 3, link_type: 'web'});
publications[3].links.create({url: 'cs.helsinki.fi', publication_id: 4, link_type: 'web'});
publications[4].links.create({url: 'www.science.com', publication_id: 5, link_type: 'web'});
publications[5].links.create({url: 'www.nature.com', publication_id: 6, link_type: 'web'});

Author.create({name: 'Pasi Kosunen', :publications => Publication.where(:id => [1,2,3])});
Author.create({name: 'Ilkka Kosunen', :publications => Publication.where(:id => [1,2,5,6])});
Author.create({name: 'Seppo Ilmarinen', :publications => Publication.where(:id => [4,3,6])});

Category.create([{name: 'EEG', layer_id: 5, :publications => Publication.where(:id => [2,3])}]);
Category.create([{name: 'EDA', layer_id: 5, :publications => Publication.where(:id => [1,3,4,5,6])}]);
Category.create([{name: 'fEMG', layer_id: 5, :publications => Publication.where(:id => [3])}]);
Category.create([{name: 'ECG', layer_id: 5, :publications => Publication.where(:id => [6])}]);

Category.create([{name: 'SCL', layer_id: 4, :publications => Publication.where(:id => [1])}]);
Category.create([{name: 'Alpha frequency', layer_id: 4, :publications => Publication.where(:id => [2])}]);
Category.create([{name: 'Theta frequency', layer_id: 4, :publications => Publication.where(:id => [2])}]);
Category.create([{name: 'SCP', layer_id: 4, :publications => Publication.where(:id => [3,6])}]);
Category.create([{name: 'CS', layer_id: 4, :publications => Publication.where(:id => [3,6])}]);
Category.create([{name: 'Tonic', layer_id: 4, :publications => Publication.where(:id => [4])}]);
Category.create([{name: 'Phasic', layer_id: 4, :publications => Publication.where(:id => [4])}]);
Category.create([{name: 'nSCR', layer_id: 4, :publications => Publication.where(:id => [4])}]);
Category.create([{name: 'Custom', layer_id: 4, :publications => Publication.where(:id => [5])}]);
Category.create([{name: 'ZM', layer_id: 4, :publications => Publication.where(:id => [6])}]);
Category.create([{name: 'OO', layer_id: 4, :publications => Publication.where(:id => [6])}]);
Category.create([{name: 'IBI', layer_id: 4, :publications => Publication.where(:id => [6])}]);

Category.create([{name: 'Arousal', layer_id: 3, :publications => Publication.where(:id => [1])}]);
Category.create([{name: 'Relaxation', layer_id: 3, :publications => Publication.where(:id => [2])}]);
Category.create([{name: 'Concentration', layer_id: 3, :publications => Publication.where(:id => [2])}]);
Category.create([{name: 'Supervised Machine Learning Features', layer_id: 3, :publications => Publication.where(:id => [3,4,5])}]);
Category.create([{name: 'Unsupervised Machine Learning Features', layer_id: 3, :publications => Publication.where(:id => [6])}]);

Category.create([{name: 'Arousal => Sound Mapping', layer_id: 2, :publications => Publication.where(:id => [1])}]);
Category.create([{name: 'Relaxation & Concentration => Movement in VR', layer_id: 2, :publications => Publication.where(:id => [2])}]);
Category.create([{name: 'ML Features => Relevance', layer_id: 2, :publications => Publication.where(:id => [3])}]);
Category.create([{name: 'ML Features => Affective States (Happy, Sad, Angry, Neutral)', layer_id: 2, :publications => Publication.where(:id => [4,5])}]);
Category.create([{name: 'Cluster frequent patterns of physiological data => Find design patterns', layer_id: 2, :publications => Publication.where(:id => [6])}]);

Category.create([{name: 'Sonify Arousal', layer_id: 1, :publications => Publication.where(:id => [1])}]);
Category.create([{name: 'Float in VR', layer_id: 1, :publications => Publication.where(:id => [2])}]);
Category.create([{name: 'Label Text', layer_id: 1, :publications => Publication.where(:id => [3,4])}]);
Category.create([{name: 'Annotate Cont. Adapt Interface', layer_id: 1, :publications => Publication.where(:id => [5])}]);
Category.create([{name: 'Extract Design Patterns', layer_id: 1, :publications => Publication.where(:id => [6])}]);
