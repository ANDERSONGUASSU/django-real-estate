from django.contrib.auth.base_user import BaseUserManager
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from django.utils.translation import gettext_lazy as _


class CustomUserManager(BaseUserManager):
    def email_validator(self, email):
        try:
            validate_email(email)
        except ValidationError:
            raise ValueError(
                _('você deve fornecer um endereço de e-mail válido')
            )

    def create_user(
        self, username, first_name, last_name, email, password, **extra_fields
    ):
        if not username:
            raise ValueError(_('Os usuários devem informar o nome de usuário'))
        if not first_name:
            raise ValueError(_('Os usuário devem informar o primeiro nome'))
        if not last_name:
            raise ValueError(_('Os usuário devem informar o sobrenome'))
        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError(
                _(
                    'Conta de usuário base: é necessário informar um endereço de e-mail'
                )
            )
        user = self.model(
            username=username,
            first_name=first_name,
            last_name=last_name,
            email=email,
            **extra_fields,
        )
        user.set_password(password)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        user.save(using=self._db)
        return user

    def create_superuser(
        self, username, first_name, last_name, email, password, **extra_fields
    ):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)
        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superusers must have is_staff=True'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superusers must have is_superuser=True'))
        if not password:
            raise ValueError(_('Os Super usuários devem informar uma senha'))
        if email:
            email = self.normalize_email(email)
            self.email_validator(email)
        else:
            raise ValueError(
                _('Conta de Administrador: é necessário informar um e-mail')
            )
        user = self.create_user(
            username, first_name, last_name, email, **extra_fields
        )
        user.save(using=self._db)
        return user
