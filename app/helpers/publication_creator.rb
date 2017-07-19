class PublicationCreator

  def create_publication_with_associations(path)
    json = read_to_json(path);
    # check if publication exists, if not, create it.
    if Publication.find_by_name(json['name']) == nil
      Publication.create(name: json['name'], year: json['year'],
                         abstract: json['abstract'], journal: json['journal']);
    else
      return;
    end
    # find the publication (to get the id as well)
    publication = Publication.find_by_name(json['name']);
    # go through categories
    json['categories'].each do |category|
      # check the layer and create it if needed.
      layer = create_layer(category['layer']);
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
    json['links'].each do |url|
      create_link(publication, url);
    end
  end

  def create_link(publication, url)
    Link.create(url: url['url'], publication_id: publication.id, link_type: 'web')
  end

  def create_author(auth, publication)
    author = Author.find_by_name(auth);
    if author == nil
      Author.create(name: auth, publications: [publication]);
    else
      author.update(publications: author.publications.push(publication));
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

  def create_layer(layer_name)
    if Layer.find_by_name(layer_name) == nil
      Layer.create(name: layer_name);
    end
    return Layer.find_by_name(layer_name);
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


end