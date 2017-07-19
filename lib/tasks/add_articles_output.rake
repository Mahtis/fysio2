desc 'Add articles_output.json data to database'
task :add_articles_output => :environment do
  pc = PublicationCreator.new;
  pc.create_publication_with_associations('pub.json')
  pc.create_publication_with_associations('pub2.json')
  pc.read_the_big_one('articles_output.json')
end