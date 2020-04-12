puts "Destroying users..."

User.destroy_all

puts "Creating users..."

# Digitalo Users

karim = User.new(
  name: "Karim",
  email: "karim@lewagon.com",
  password: "123456",
)
# karim.remote_photo_url = "https://res.cloudinary.com/wagon/image/upload/c_fill,g_face,h_200,w_200/qqtccckpyj555oibt676.jpg"
karim.save

felipe = User.new(
  name: "Felipe",
  email: "felipe@lewagon.com",
  password: "123456",
)
  # felipe.remote_photo_url = "https://avatars3.githubusercontent.com/u/54073875?v=4"
  felipe.save

bitna = User.new(
  name: "Bitna",
  email: "bitna@lewagon.com",
  password: "123456",
)
  # bitna.remote_photo_url = "https://res.cloudinary.com/wagon/image/upload/c_fill,g_face,h_200,w_200/zizjr3r1g3d2b1vlp1iy.jpg"
  bitna.save

fanny = User.new(
  name: "Fanny",
  email: "fanny@lewagon.com",
  password: "123456",
)
  # fanny.remote_photo_url = "https://avatars2.githubusercontent.com/u/54022229?v=4"
  fanny.save

carol = User.new(
  name: "Carol",
  email: "carol@lewagon.com",
  password: "123456",
)
  # carol.remote_photo_url = "https://avatars2.githubusercontent.com/u/55203965?v=4"
  carol.save



puts "Users created."



