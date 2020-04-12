
puts "Destroying departments..."

Department.destroy_all

puts "Creating departments..."


# Digitalo Departments

frontend = Department.new(
  name: "frontend",
)
frontend.save

backend = Department.new(
  name: "backend",
)
backend.save

operations = Department.new(
  name: "operations",
)
operations.save

sales = Department.new(
  name: "sales",
)
sales.save

marketing = Department.new(
  name: "marketing",
)
marketing.save

puts "Departments created."



