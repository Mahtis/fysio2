json.extract! publication, :id, :name, :abstract, :year, :journal
json.url publication_url(publication, format: :json)
