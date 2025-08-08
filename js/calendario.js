document.getElementById('agendarGoogle').addEventListener('click', function(e) {
    // Prevenir el comportamiento predeterminado del enlace
    e.preventDefault();
    
    // Configuración del evento (¡Edita estos valores!)
    const configEvento = {
        fechaInicio: '2025-09-13T21:00:00',  // Fecha/hora predeterminada
        duracionHoras: 1,                    // Duración en horas
        titulo: 'Cumple%20de%2015%20años%20de%20Aymará',       // Título (usar %20 para espacios)
    };

    // Formatear fechas para Google Calendar
    const fechaInicio = new Date(configEvento.fechaInicio);
    const fechaFin = new Date(fechaInicio.getTime() + (configEvento.duracionHoras * 60 * 60 * 1000));
    
    const formatoGoogle = fecha => fecha.toISOString().replace(/-|:|\.\d+/g, '');
    
    // Construir URL y asignarla al href
    this.href = `https://www.google.com/calendar/render?action=TEMPLATE` +
                `&dates=${formatoGoogle(fechaInicio)}/${formatoGoogle(fechaFin)}` +
                `&text=${configEvento.titulo}`;
    
    // El target="_blank" en el HTML ya abre en nueva pestaña
});