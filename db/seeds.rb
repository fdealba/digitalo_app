# require_relative './seeds/user_seeds'
# require_relative './seeds/department_seeds'


# Digitalo Inc Seeds

# Test 1 - USERS - BUSINESS - DEPARTMENTS


puts "Destroying users..."

User.destroy_all

puts "Destroying departments..."

Department.destroy_all

puts "Destroying businesses..."

Business.destroy_all

puts "Creating businesses..."
# Digitalo Businesses
karim = User.new(
  name: "Karim",
  email: "karim@lewagon.com",
  password: "123456",
)

apple = Business.new(
  name: "Apple",
)
apple.administrator = karim
# karim.remote_photo_url = "https://res.cloudinary.com/wagon/image/upload/c_fill,g_face,h_200,w_200/qqtccckpyj555oibt676.jpg"
apple.save


puts "Businesses created."




puts "Finding Apple Company..."

# Apple Business

business1 = Business.find_by(name: "Apple")

puts "Finding users..."





puts "Create departments..."

# Create Apple Departments

frontend = Department.new(name: "frontend")
backend = Department.new(name: "backend")
operations = Department.new(name: "operations")
sales = Department.new(name: "sales")
marketing = Department.new(name: "marketing")


puts "Attach project and business..."

# Apple Project
[frontend, backend, operations, sales, marketing].each do |dpto|
  dpto.business = business1
  dpto.administrator = karim
end






# Apple Users



puts "Creating users..."

# Digitalo Users


karim.business = business1
karim.department = frontend
karim.save

felipe = User.new(
  name: "Felipe",
  email: "felipe@lewagon.com",
  password: "123456",
)
felipe.business = business1
felipe.department = backend
felipe.save

bitna = User.new(
  name: "Bitna",
  email: "bitna@lewagon.com",
  password: "123456",
)
bitna.business = business1
bitna.department = operations
bitna.save

fanny = User.new(
  name: "Fanny",
  email: "fanny@lewagon.com",
  password: "123456",
)
fanny.business = business1
fanny.department = sales
fanny.save

carol = User.new(
  name: "Carol",
  email: "carol@lewagon.com",
  password: "123456",
)
carol.business = business1
carol.department = marketing
carol.save

puts "Users created."






puts "Adding departments to business ..."

# Final moves in first section

business1.departments << [frontend, backend, operations, sales, marketing]

puts "Adding users to business ..."

business1.users << [karim, bitna, fanny, carol, felipe]

puts "Adding users to departments ..."

frontend.users << [karim]
backend.users << [bitna]
operations.users << [fanny]
sales.users << [carol]
marketing.users << [felipe]

puts "Saving departments ..."

frontend.save 
backend.save 
operations.save 
sales.save 
marketing.save 
business1.save


# Test 2 - PROJECT - TASKS

# Create Project

project1 = Project.new(title: 'title', description: 'sample description')
project1.department = frontend
project1.administrator = karim
project1.users << [karim]
project1.save

project2 = Project.new(title: 'title', description: 'sample description')
project2.department = backend
project2.administrator = bitna
project2.users << [bitna]
project2.save

project3 = Project.new(title: 'title', description: 'sample description')
project3.department = operations
project3.administrator = fanny
project3.users << [fanny]
project3.save

project4 = Project.new(title: 'title', description: 'sample description')
project4.department = sales
project4.administrator = carol
project4.users << [carol]
project4.save

project5 = Project.new(title: 'title', description: 'sample description')
project5.department = marketing
project5.administrator = felipe
project5.users << [felipe]
project5.save


# Create Tasks


task1 = Task.new(title: 'task1', body: 'body')
task1.project = project1
task1.administrator = bitna
task1.users << [karim]
task1.save

task2 = Task.new(title: 'task2', body: 'body')
task2.project = project2
task2.administrator = bitna
task2.users << [bitna]
task2.save

task3 = Task.new(title: 'task3', body: 'body')
task3.project = project3
task3.administrator = bitna
task3.users << [fanny]
task3.save

task4 = Task.new(title: 'task4', body: 'body')
task4.project = project4
task4.administrator = bitna
task4.users << [carol]
task4.save

task5 = Task.new(title: 'task5', body: 'body')
task5.project = project5
task5.administrator = bitna
task5.users << [felipe]
task5.save

# Creating and Assigning Timers

timer = Timer.new()
timer.user = karim;
timer.save



puts "Seeds done!!!"
