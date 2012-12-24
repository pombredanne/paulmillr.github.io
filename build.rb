#!/usr/bin/env ruby

# GitHub pages markdown converter is shitty.
# Redcarpet is converter that's used in GitHub issues / comments etc.
# The script converts files from _posts-raw directory with Redcarpet.

require 'redcarpet'

RENDERER = Redcarpet::Markdown.new(Redcarpet::Render::HTML, {
  no_intra_emphasis: true,
  fenced_code_blocks: true,
  autolink: true
})

dir = File.dirname(__FILE__)
RAW = File.join(dir, '_posts-raw')
OUTPUT = File.join(dir, '_posts')

def convert(data)
  RENDERER.render(data)
end

def convert_file(file)
  location_in_raw = File.join(RAW, file)
  location_in_output = File.join(OUTPUT, File.basename(file, '.md') + '.html')
  File.write(location_in_output, convert(File.read(location_in_raw)))
end

def read_files_and_convert
  Dir.glob("#{RAW}/*").map { |file| file.sub("#{RAW}/", '') }.each do |file|
    convert_file file
  end
end

read_files_and_convert()
