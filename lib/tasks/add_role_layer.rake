desc 'Add Role layer and add it to Hacker view with application and signal layers'
task :add_role_layer => :environment do
  data_adder = AddDataToLayers.new;
  data_adder.add_data
end