# Generated by Django 5.0.1 on 2024-02-04 09:21

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('profiles', '0004_alter_profile_country'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Rating',
            fields=[
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
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                (
                    'rating',
                    models.IntegerField(
                        choices=[
                            (1, 'Poor'),
                            (2, 'Fair'),
                            (3, 'Good'),
                            (4, 'Very Good'),
                            (5, 'Excellent'),
                        ],
                        help_text='1=Poor, 2=Fair, 3=Good, 4=Very Good, 5=Excellent',
                        verbose_name='Rating',
                    ),
                ),
                ('comment', models.TextField(verbose_name='Comment')),
                (
                    'agent',
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        related_name='ratings_received',
                        to='profiles.profile',
                        verbose_name='Agent being rated',
                    ),
                ),
                (
                    'rater',
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to=settings.AUTH_USER_MODEL,
                        verbose_name='User providing the rating',
                    ),
                ),
            ],
            options={
                'unique_together': {('rater', 'agent')},
            },
        ),
    ]
