# Generated by Django 5.0.1 on 2024-02-03 09:03

import django.utils.timezone
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                (
                    'password',
                    models.CharField(max_length=128, verbose_name='password'),
                ),
                (
                    'last_login',
                    models.DateTimeField(
                        blank=True, null=True, verbose_name='last login'
                    ),
                ),
                (
                    'is_superuser',
                    models.BooleanField(
                        default=False,
                        help_text='Designates that this user has all permissions without explicitly assigning them.',
                        verbose_name='superuser status',
                    ),
                ),
                (
                    'pkid',
                    models.BigAutoField(
                        editable=False, primary_key=True, serialize=False
                    ),
                ),
                (
                    'id',
                    models.UUIDField(
                        default=uuid.uuid4, editable=False, unique=True
                    ),
                ),
                (
                    'username',
                    models.CharField(
                        max_length=255, unique=True, verbose_name='Username'
                    ),
                ),
                (
                    'first_name',
                    models.CharField(max_length=50, verbose_name='First Name'),
                ),
                (
                    'last_name',
                    models.CharField(max_length=50, verbose_name='Last Name'),
                ),
                (
                    'email',
                    models.EmailField(
                        max_length=254,
                        unique=True,
                        verbose_name='Email Address',
                    ),
                ),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=True)),
                (
                    'date_joined',
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                (
                    'groups',
                    models.ManyToManyField(
                        blank=True,
                        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
                        related_name='user_set',
                        related_query_name='user',
                        to='auth.group',
                        verbose_name='groups',
                    ),
                ),
                (
                    'user_permissions',
                    models.ManyToManyField(
                        blank=True,
                        help_text='Specific permissions for this user.',
                        related_name='user_set',
                        related_query_name='user',
                        to='auth.permission',
                        verbose_name='user permissions',
                    ),
                ),
            ],
            options={
                'verbose_name': 'User',
                'verbose_name_plural': 'Users',
            },
        ),
    ]
