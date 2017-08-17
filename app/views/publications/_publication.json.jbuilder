json.extract! publication, :id, :name, :abstract, :year, :journal, :links, :created_at, :updated_at
json.url publication_url(publication, format: :json)
