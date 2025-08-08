document.getElementById('agendarGoogle').addEventListener('click', function(e) {
    // Prevenir el comportamiento predeterminado del enlace
    e.preventDefault();
    
    // Configuración del evento (¡Edita estos valores!)
    const configEvento = {
        fechaInicio: '2025-09-13T21:00:00',  // Fecha/hora predeterminada
        duracionHoras: 1,                    // Duración en horas
        titulo: 'Cumple de 15 años de Aymará' // Título (sin codificar)
    };

    // Formatear fechas para Google Calendar
    const fechaInicio = new Date(configEvento.fechaInicio);
    const fechaFin = new Date(fechaInicio.getTime() + (configEvento.duracionHoras * 60 * 60 * 1000));
    
    const formatoGoogle = fecha => {
        return fecha.toISOString()
            .replace(/-/g, '')
            .replace(/:/g, '')
            .replace(/\.\d+/g, '');
    };
    
    // Construir URL y asignarla al href
    this.href = `https://www.google.com/calendar/render?action=TEMPLATE` +
                `&dates=${formatoGoogle(fechaInicio)}/${formatoGoogle(fechaFin)}` +
                `&text=${encodeURIComponent(configEvento.titulo)}`;
    
    // Permitir que el navegador siga el enlace después de asignarlo
    window.open(this.href, '_blank');
});