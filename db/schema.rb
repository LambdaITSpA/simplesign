# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20150723211038) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "countries", force: :cascade do |t|
    t.string "name"
  end

  create_table "documents", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.string   "file_file_name"
    t.string   "file_content_type"
    t.integer  "file_file_size"
    t.datetime "file_updated_at"
    t.boolean  "signed",            default: false
    t.datetime "signed_at"
  end

  create_table "participants", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "document_id"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "signed",      default: false
    t.datetime "signed_at"
  end

  add_index "participants", ["document_id"], name: "index_participants_on_document_id", using: :btree
  add_index "participants", ["user_id"], name: "index_participants_on_user_id", using: :btree

  create_table "user_verification_data", force: :cascade do |t|
    t.string  "id_number"
    t.boolean "verified"
    t.boolean "enabled"
    t.integer "user_verification_method_id"
    t.integer "user_id"
  end

  add_index "user_verification_data", ["user_id"], name: "index_user_verification_data_on_user_id", using: :btree
  add_index "user_verification_data", ["user_verification_method_id"], name: "index_user_verification_data_on_user_verification_method_id", using: :btree

  create_table "user_verification_methods", force: :cascade do |t|
    t.string  "name"
    t.integer "country_id"
  end

  add_index "user_verification_methods", ["country_id"], name: "index_user_verification_methods_on_country_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",                         default: "", null: false
    t.string   "encrypted_password",            default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                 default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "id_number"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
    t.integer  "country_id"
    t.boolean  "chilean_id_validation_enabled"
  end

  add_index "users", ["country_id"], name: "index_users_on_country_id", using: :btree
  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "participants", "documents"
  add_foreign_key "participants", "users"
  add_foreign_key "user_verification_data", "user_verification_methods"
  add_foreign_key "user_verification_data", "users"
  add_foreign_key "user_verification_methods", "countries"
  add_foreign_key "users", "countries"
end
