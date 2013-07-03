from fabric.api import run
import sqlite3

__author__ = 'adamj'

def clear_video_list_data():
    with sqlite3.connect('springlab_demo.sqlite3.db') as connection:
        connection.execute('DELETE FROM video_list_video;')
