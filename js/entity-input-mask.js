$(document).ready(function(){
    $('.name').mask('N', { translation: {'N': { pattern: /[A-Za-z\s]/, recursive: true } } });

    $('.email').mask('E', { translation: {'E': { pattern: /[\w@\-.+]/, recursive: true } } });

    $('.phone').mask('(000) 000-0000');

    $('.text').mask('N', { translation: {'N': { pattern: /[A-Za-z\s]/, recursive: true } } });

    $('.text-lg').mask('N', { translation: {'N': { pattern: /[A-Za-z\s]/, recursive: true } } });

    $('.alphanumeric').mask('A', {reverse: true});

    $('.number').mask('I', { translation: {'I': { pattern: /[0-9]/, recursive: true } } });

    $('.double').mask('000,000,000,000,000.00', {reverse: true});

    $('.money').mask('000,000,000,000,000.00', {reverse: true});
});