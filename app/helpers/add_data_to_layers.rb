class AddDataToLayers

  def add_data
    categories = [];
    layer_type = LayerType.find_by_name('Hacker')
    role_layer = Layer.create(name: 'Role', layer_types: [layer_type])
    categories.push(Category.create(name: 'Artist', layer_id: role_layer.id, infolink: '#', description: 'Draws pictures'))
    categories.push(Category.create(name: 'Coder', layer_id: role_layer.id, infolink: '#', description: 'Codes the application'))
    categories.push(Category.create(name: 'Researcher', layer_id: role_layer.id, infolink: '#', description: 'Researches the subject matter'))
    categories.push(Category.create(name: 'Designer', layer_id: role_layer.id, infolink: '#', description: 'Designs the appearence'))
    categories.push(Category.create(name: 'Manager', layer_id: role_layer.id, infolink: '#', description: 'Manager manages the process'))
    categories.push(Category.create(name: 'Layperson', layer_id: role_layer.id, infolink: '#', description: 'Someone who is not very well-versed in the subject matter'))
    categories.push(Category.create(name: 'Investor', layer_id: role_layer.id, infolink: '#', description: 'Pours money into the project'))
    role_layer.update(categories: categories)
    publications = Publication.all
    publications.each do |pub|
      cat = categories[rand(categories.length)]
      pub.update(categories: pub.categories.push(cat))
    end
  end

end