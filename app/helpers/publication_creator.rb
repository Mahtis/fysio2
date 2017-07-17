class PublicationCreator

  def createPublication(path)
    file = File.read(path);
    fileHash = JSON.parse(file);
    # check if publication exists, if not, create it.
    if Publication.find_by_name(fileHash['name']) == nil
      Publication.create(name: fileHash['name'], year: fileHash['year'],
                         abstract: fileHash['abstract'], journal: fileHash['journal']);
    else
      return;
    end
    # find the publication (to get the id as well)
    publication = Publication.find_by_name(fileHash['name']);
    # go through categories
    fileHash['categories'].each do |category|

      # check the layers and create them if needed.
      layerName = category['layer'];
      if Layer.find_by_name(layerName) == nil
        Layer.create(name: layerName);
      end
      layer = Layer.find_by_name(layerName);

      # go through the names, and transform them into new categories if needed.
      category['name'].each do |name|
        category = Category.find_by_name(name);
        if category == nil
          Category.create(name: name, layer_id: layer.id,
                          publications: [publication], description: name,
                          infolink: '#');
        else # if category exists, just update its publication list.
          category.update(publications: category.publications.push(publication));
        end
      end
    end

    # do similar search as with categories now with authors
    fileHash['authors'].each do |auth|
      author = Author.find_by_name(auth['name'])
      if author == nil
        Author.create(name: auth['name'], publications: [publication]);
      else
        author.update(publications: author.publications.push(publication));
      end
    end
    # create link, since each link is only linked to one publication
    fileHash['links'].each do |url|
      Link.create(url: url['url'], publication_id: publication.id, link_type: 'web');
    end
  end

end