# Generated by Django 5.1.2 on 2024-10-26 13:06

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0004_alter_info_monthly_income"),
    ]

    operations = [
        migrations.AddField(
            model_name="info",
            name="created_at",
            field=models.DateTimeField(auto_now=True),
        ),
    ]
