# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170828115513) do

  create_table "authors", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "authors_publications", id: false, force: :cascade do |t|
    t.integer "publication_id", null: false
    t.integer "author_id", null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.integer "layer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
    t.string "infolink"
  end

  create_table "categories_publications", id: false, force: :cascade do |t|
    t.integer "publication_id", null: false
    t.integer "category_id", null: false
  end

  create_table "layer_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "layer_types_layers", id: false, force: :cascade do |t|
    t.integer "layer_id", null: false
    t.integer "layer_type_id", null: false
  end

  create_table "layers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "order"
  end

  create_table "links", force: :cascade do |t|
    t.string "link_url"
    t.integer "publication_id"
    t.string "link_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "publications", force: :cascade do |t|
    t.string "name"
    t.string "abstract"
    t.integer "year"
    t.string "journal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "moreTitles"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role"
    t.string "password_digest"
    t.string "oauth"
    t.string "realname"
  end

end
