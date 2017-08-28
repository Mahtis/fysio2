class PublicationCreator


  def create_publication_with_associations(path)
    json = read_to_json(path);
    # check if publication exists, if not, create it.
    if Publication.find_by_name(json['name']) == nil
      Publication.create(name: json['name'], year: json['year'],
                         abstract: json['abstract'], journal: json['journal'], moreTitles: json['moreTitles']);
    else
      return;
    end
    # find the publication (to get the id as well)
    publication = Publication.find_by_name(json['name']);
    # go through categories
    json['categories'].each do |category|
      # check the layer and create it if needed.
      layer = create_layer(category['layer'], 10);
      # go through the names, and transform them into new categories if needed.
      category['name'].each do |name|
        create_category(layer.id, name, publication);
      end
    end
    # create authors like categories
    json['authors'].each do |auth|
      create_author(auth['name'], publication);
    end
    # create link, since each link is only linked to one publication
    json['links'].each do |link_url|
      create_link(publication.id, link_url['link_url'], 'web');
    end
  end


  def create_publications(path)
    json = read_to_json(path)
    json.each do |pub|
      authors = []
      pub['authors'].each do |author|
        if Author.find_by_name(author) == nil
          authors.push(Author.create(name: author))
        else
          authors.push(Author.find_by_name(author))
        end
      end
      if Publication.find_by_name(pub['name']) == nil
        Publication.create(name: pub['name'], year: pub['year'],
                           abstract: pub['abstract'], journal: pub['journal'], moreTitles: pub['moreTitles'],
        categories: Category.where(name: pub['categories']), authors: authors);
      end
    end
  end


  def create_link(publication_id, link_url, link_type)
    Link.create(link_url: link_url, publication_id: publication_id, link_type: link_type)
  end


  def create_links(path)
    json = read_to_json(path)
    json.each do |link|
      create_link(link['publication_id'], link['link_url'], link['link_type'])
    end
  end

  def create_author(auth, publication)
    author = Author.find_by_name(auth);
    if author == nil
      Author.create(name: auth, publications: [publication]);
    else
      author.update(publications: author.publications.push(publication));
    end
  end


  def create_categories(path)
    json = read_to_json(path)
    json.each do |category|
      if Category.find_by_name(category['name']) == nil
        Category.create(name: category['name'], layer_id: category['layer_id'],
                        description: category['description'], infolink: category['infolink']);
      end
    end
  end


  def create_category(layer_id, name, publication)
    category = Category.find_by_name(name);
    if category == nil
      Category.create(name: name, layer_id: layer_id,
                      publications: [publication], description: name,
                      infolink: '#');
    else # if category exists, just update its publication list.
      category.update(publications: category.publications.push(publication));
    end
  end


  def create_layer(layer_name, order)
    if Layer.find_by_name(layer_name) == nil
      Layer.create(name: layer_name, order: order);
    end
    return Layer.find_by_name(layer_name);
  end


  def create_layers(path)
    json = read_to_json(path)
    json.each do |layer|
      create_layer(layer['name'], layer['order'])
    end
  end


  def create_layer_types(path)
    json = read_to_json(path)
    json.each do |type|
      if LayerType.find_by_name(type['name']) == nil
        LayerType.create(name: type['name'], layers: Layer.find(type['layer_ids']));
      end
    end
  end


  def read_to_json(path)
    file = File.read(path);
    return JSON.parse(file);
  end


  def read_the_big_one(path)
    json = read_to_json(path)
    json.each do |pub|
      if Publication.find_by_name(pub['title']) == nil
        Publication.create(name: pub['title'], year: pub['year']);
      end
      # find the publication (to get the id as well)
      publication = Publication.find_by_name(pub['title']);
      create_category(5,pub['signals'],publication);
      pub['authors'].each do |auth|
        create_author(auth,publication)
      end
    end
  end


  def create_dummy_data(amount)
    name_list = create_strings(amount)
    year_list = create_years(amount)
    abstract = 'This is an abstract text that I am writing right now. It is very interesting
and also not very long. Please check some things or maybe not. I am not sure. I am doing
this for research purposes so please do not be too hard on me. I am a simple man. With simple
dreams. Dreams of a better world, where data is generated easily with a simple script.
I know this is a fools dream and shall not be filled so easily, but alas, I will try.'
    journal = 'THE GREATEST JOURNAL THERE EVER WAS'
    moreTitles = 'MORE|READ MORE, KNOW MORE.'
    layers = Layer.all
    categories = {}
    layers.each do |layer|
      categories[layer] = Category.where(layer_id: layer.id)
    end
    authors = Author.where(id: [1,2])
    name_list.each do |name|
      pub_categories = []
      layers.each do |layer|
        pub_categories.push(categories[layer][rand(categories[layer].length)])
      end
      publication = Publication.create(name: name, year: year_list[rand(year_list.length)],
                         abstract: abstract, journal: journal, moreTitles: moreTitles, categories: pub_categories, authors: authors);
      create_link(publication.id, 'www.' + publication.name + '.org', 'web');
    end

  end


  def create_strings(amount)
    string_list = [];
    name = 'AAAAa';
    for i in 1..amount do
      string_list.push(name.next!.dup);
    end
    return string_list
  end


  def create_years(amount)
    years = []
    for i in 1..amount do
      years.push(1900 + rand(117))
    end
    return years;
  end


end