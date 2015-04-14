# Plugins
require 'susy'
require 'breakpoint'

# Change Compass configuration
compass_config do |config|
  config.output_style = :compact
end

# Reload the browser automatically whenever files change
activate :livereload, :host => '127.0.0.1'

#haml

# CodeRay syntax highlighting in Haml
# First: gem install haml-coderay
require 'haml-coderay'

###
# Helpers
###

# Change the CSS directory
set :css_dir, "assets/css"

# Change the JS directory
set :js_dir, "assets/js"

# Change the images directory
set :images_dir, "assets/img"

# Change the fonts directory
set :fonts_dir,  "assets/fonts"

# Build-specific configuration
configure :build do

  # Requires middleman-favicon-maker
  # activate :favicon_maker,
  #   :favicon_maker_base_image => "favicon_base.svg"

  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end

# Requires middleman-deploy and rsync
# activate :deploy do |deploy|
#   deploy.method = :rsync
#   deploy.user   = "example"
#   deploy.host   = "www.example.com"
#   deploy.path   = "/public_html"
#   # Optional Settings
#   deploy.port  = 22 # ssh port, default: 22
#   deploy.clean = true # remove orphaned files on remote host, default: false
#   deploy.build_before = true # default: false
# end

# Skip locale validation (and validation warnings)
I18n.enforce_available_locales = false