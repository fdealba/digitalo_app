# require_relative './seeds/user_seeds'
# require_relative './seeds/department_seeds'



puts "Destroying users..."

User.destroy_all

puts "Destroying departments..."

Department.destroy_all

puts "Destroying businesses..."

Business.destroy_all




puts "Creating businesses..."
# Digitalo Businesses

apple = Business.new(
  name: "Apple",
)
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
end






# Apple Users



puts "Creating users..."

# Digitalo Users

karim = User.new(
  name: "Karim",
  email: "karim@lewagon.com",
  password: "123456",
)
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






puts "Final moves..."

# Final moves

business1.departments << [frontend, backend, operations, sales, marketing]
business1.users << [karim, bitna, fanny, carol, felipe]

frontend.users << [karim]
backend.users << [bitna]
operations.users << [fanny]
sales.users << [carol]
marketing.users << [felipe]

frontend.save 
backend.save 
operations.save 
sales.save 
marketing.save 
business1.save

puts "Seeds done!!!"
