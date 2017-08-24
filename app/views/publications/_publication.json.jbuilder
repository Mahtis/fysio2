json.extract! publication, :id, :name, :abstract, :year, :journal, :moreTitles)
json.url publication_url(publication, format: :json)
