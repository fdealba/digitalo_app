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

ActiveRecord::Schema.define(version: 2020_05_06_161202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "administrator_id"
    t.index ["administrator_id"], name: "index_businesses_on_administrator_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.bigint "user_id"
    t.bigint "forum_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "administrator_id"
    t.index ["administrator_id"], name: "index_categories_on_administrator_id"
    t.index ["forum_id"], name: "index_categories_on_forum_id"
    t.index ["user_id"], name: "index_categories_on_user_id"
  end

  create_table "departments", force: :cascade do |t|
    t.string "name"
    t.bigint "business_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "administrator_id"
    t.index ["administrator_id"], name: "index_departments_on_administrator_id"
    t.index ["business_id"], name: "index_departments_on_business_id"
  end

  create_table "forums", force: :cascade do |t|
    t.bigint "department_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["department_id"], name: "index_forums_on_department_id"
  end

  create_table "posts", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.bigint "category_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "administrator_id"
    t.index ["administrator_id"], name: "index_posts_on_administrator_id"
    t.index ["category_id"], name: "index_posts_on_category_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "posts_users", id: false, force: :cascade do |t|
    t.bigint "post_id", null: false
    t.bigint "user_id", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "department_id"
    t.bigint "administrator_id"
    t.index ["administrator_id"], name: "index_projects_on_administrator_id"
    t.index ["department_id"], name: "index_projects_on_department_id"
  end

  create_table "projects_users", id: false, force: :cascade do |t|
    t.bigint "project_id", null: false
    t.bigint "user_id", null: false
  end

  create_table "replies", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.bigint "post_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_replies_on_post_id"
    t.index ["user_id"], name: "index_replies_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.boolean "completed", default: false
    t.integer "progress", default: 0
    t.boolean "started", default: false
    t.string "title"
    t.text "body"
    t.bigint "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "administrator_id"
    t.index ["administrator_id"], name: "index_tasks_on_administrator_id"
    t.index ["project_id"], name: "index_tasks_on_project_id"
  end

  create_table "tasks_users", id: false, force: :cascade do |t|
    t.bigint "task_id", null: false
    t.bigint "user_id", null: false
  end

  create_table "timers", force: :cascade do |t|
    t.boolean "running", default: true
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_timers_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
    t.string "id_number"
    t.string "name"
    t.string "last_name"
    t.string "phone_number"
    t.string "role"
    t.string "city"
    t.integer "salary"
    t.integer "points"
    t.bigint "business_id"
    t.bigint "department_id"
    t.index ["business_id"], name: "index_users_on_business_id"
    t.index ["department_id"], name: "index_users_on_department_id"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "businesses", "users", column: "administrator_id"
  add_foreign_key "categories", "forums"
  add_foreign_key "categories", "users"
  add_foreign_key "categories", "users", column: "administrator_id"
  add_foreign_key "departments", "businesses"
  add_foreign_key "departments", "users", column: "administrator_id"
  add_foreign_key "forums", "departments"
  add_foreign_key "posts", "categories"
  add_foreign_key "posts", "users"
  add_foreign_key "posts", "users", column: "administrator_id"
  add_foreign_key "projects", "departments"
  add_foreign_key "projects", "users", column: "administrator_id"
  add_foreign_key "replies", "posts"
  add_foreign_key "replies", "users"
  add_foreign_key "tasks", "projects"
  add_foreign_key "tasks", "users", column: "administrator_id"
  add_foreign_key "timers", "users"
  add_foreign_key "users", "businesses"
  add_foreign_key "users", "departments"
end
